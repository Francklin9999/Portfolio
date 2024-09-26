import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function Avatar(props) {
  const { animation, positionAvatar, rotationAvatar, scaleAvatar } = props;

  const group = useRef();
  const { scene: avatarScene } = useGLTF('models/avatar.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(avatarScene), [avatarScene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: idleAnimation } = useFBX("animations/Idle.fbx");
  
  typingAnimation[0].name = "Typing";
  idleAnimation[0].name = "Idle";

  const { actions } = useAnimations(
    [typingAnimation[0], idleAnimation[0]], 
    group
  );

  useEffect(() => {
    if (Object.keys(actions).length > 0) {
      if (animation === "Typing") {
        actions[animation].reset().play();
      } else if (animation === "Idle") {
        actions[animation].reset().fadeIn(0.5).play();
      }
    }
  
    return () => {
      if (actions[animation]) {
        actions[animation].fadeOut(0.5);
      }
    };
  }, [animation, actions]);  

  return (
    <>
    <group {...props} ref={group} dispose={null} scale={[scaleAvatar[0], scaleAvatar[1], scaleAvatar[2]]}>
      
      <group rotation-x={-Math.PI / 2} position={[positionAvatar[0], positionAvatar[1], positionAvatar[2]]} rotation={[rotationAvatar[0], rotationAvatar[1], rotationAvatar[2]]}> 
        <primitive object={nodes.Hips} />
        <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
        <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
        <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
      </group>
    </group>
    </>
  );
}

useGLTF.preload('models/avatar.glb');
useGLTF.preload('models/chair.glb');
useGLTF.preload('models/background.glb'); 
