let scene, camera, renderer, model;

function init() {
    console.log("Initializing 3D scene");

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, 10, 0.1, 10);
    camera.position.set(0, 1.3, 0);
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('modelViewer'),
        alpha: true,
        antialias: true
    });

    const container = document.getElementById('model-container');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.7);
    scene.add(hemisphereLight);

    // Camera position
    camera.position.z = 5;

    // Add a simple cube to the scene to check if rendering works
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Load the .glb model
    const loader = new THREE.GLTFLoader();
    loader.load(
        './assets/avatar.glb',
        function (gltf) {
            model = gltf.scene;

            model.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.setHex(0xffffff);
                    child.material.emissive.setHex(0x333333);
                    child.material.emissiveIntensity = 0.2;
                    child.material.metalness = 0.1;
                    child.material.roughness = 0.5;
                }
            });

            // Center the model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);

            // Scale the model to a fixed size
            const scale = box.getSize(new THREE.Vector3()).length() * 1.2;
            model.scale.set(scale, scale, scale);
            scene.add(model);
            console.log("Model added to scene");

            // Remove the cube after the model is loaded
            scene.remove(cube);

            // Start animation loop after model is loaded
            animate();
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error happened while loading the model', error);
        }
    );

    // Resize handler
    window.addEventListener('resize', onWindowResize, false);
    onWindowResize();

    animate();
}

function onWindowResize() {
    const container = document.getElementById('model-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.005;
    }
    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        anchors: ['home_', 'about_', 'skills_', 'experience_', 'education_', 'projects_', 'contact_'],
        scrollingSpeed: 700,
    });

    init();
});