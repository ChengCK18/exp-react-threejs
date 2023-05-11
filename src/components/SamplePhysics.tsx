// import { Buffer } from "buffer";
const Ammo = require("@hapi/ammo");
// window.Buffer = window.Buffer || require("buffer").Buffer;

const SamplePhysics = () => {
    const setupPhysicsWorld = () => {
        let collisionConfiguration = new Ammo.btDefaultCollisionConfiguration(),
            dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration),
            overlappingPairCache = new Ammo.btDbvtBroadphase(),
            solver = new Ammo.btSequentialImpulseConstraintSolver();

        let physicsWorld = new Ammo.btDiscreteDynamicsWorld(
            dispatcher,
            overlappingPairCache,
            solver,
            collisionConfiguration
        );
        physicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));

        // Return the physicsWorld object
        return physicsWorld;
    };

    return <div>heyy</div>;
};

export default SamplePhysics;
