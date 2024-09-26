import React from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import vscodeVideo from '../assets/vscode.mp4';

export default function Scene(props) {
  const { nodes, materials } = useGLTF('models/scene.glb');
  const textureVSCode = useVideoTexture(vscodeVideo, { muted: true });
  
  return (
    <group {...props} dispose={null} position={[0, -2, 0]} rotation={[0.2, 1.58, -0.2]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.019}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[235.302, 166.379, 142.678]} rotation={[-Math.PI / 2, 0, -1.658]} scale={[0.228, 0.227, 0.248]}>
            <group position={[0, 0, -75.502]}>
              <mesh geometry={nodes.Beat_light_tall001_Bulb_0.geometry} material={materials['Bulb.001']} />
              <mesh geometry={nodes.Beat_light_tall001_Case_exterior_0.geometry} material={materials['Case_exterior.001']} />
              <mesh geometry={nodes.Beat_light_tall001_Case_interior_0.geometry} material={materials['Case_interior.001']} />
              <mesh geometry={nodes.Beat_light_tall001_Plastic_0.geometry} material={materials['Plastic.001']} />
            </group>
          </group>
          <group position={[234.117, 50, 142.319]} rotation={[Math.PI / 2, 0, 0.698]} scale={-0.576}>
            <group position={[0.065, 7.402, 1.145]} rotation={[0, 0, -0.005]} scale={1.116}>
              <mesh geometry={nodes.Box010_water_0.geometry} material={materials['water.001']} position={[9.69, -6.067, 0.072]} />
            </group>
            <group position={[-16.115, 34.101, -8.616]} rotation={[-1.567, 1.033, -3.138]} scale={0.177}>
              <group position={[-318.836, 378.588, 117.323]} rotation={[-2.715, 0.198, 2.718]}>
                <mesh geometry={nodes.Calla__Lilia_stem_0.geometry} material={materials['Lilia_stem.001']} />
                <mesh geometry={nodes['Calla__Material_#0_0'].geometry} material={materials['Material_0.001']} />
              </group>
            </group>
          </group>
          <group position={[-51.636, 191.409, -149.832]} rotation={[-Math.PI / 2, 0, -3.054]}>
            <mesh geometry={nodes['hallo!!009_xdfdty34563_0'].geometry} material={materials['xdfdty34563.001']} position={[8.137, 0.401, -1.794]} rotation={[0, 1.434, 1.571]} scale={[-0.142, -0.131, -0.181]} />
            <mesh geometry={nodes.lovesecret009_FGHE567W34T_XFHSJ_0.geometry} material={materials['FGHE567W34T_XFHSJ.001']} position={[-0.913, 0.328, -2.294]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.165, -0.125, -0.073]} />
            <mesh geometry={nodes['mask_orange_black!!!009_DXRY4SN56SVBFaQA_0'].geometry} material={materials['DXRY4SN56SVBFaQA.001']} position={[3.118, -0.262, 0.005]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.172, -0.157, -0.275]} />
            <mesh geometry={nodes['��������!!!!009_11_-_Default_0'].geometry} material={materials['11_-_Default.001']} position={[-2.091, 0.401, -1.267]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.139, -0.139, -0.083]} />
            <mesh geometry={nodes['������������_��_�����'].geometry} material={materials['09P89DFGAE54Q5.001']} position={[-7.853, 0.401, -1.965]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.142, -0.13, -0.202]} />
            <mesh geometry={nodes['������������019_uy67_0'].geometry} material={materials['uy67.001']} position={[-3.524, 0.401, -3.025]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.136, -0.115, -0.156]} />
            <mesh geometry={nodes['��������������009_gyituwe55jq4uttgh'].geometry} material={materials['gyituwe55jq4uttghikyitdf.001']} position={[-5.905, 0.328, -0.882]} rotation={[Math.PI / 2, 1.571, 0]} scale={[-0.162, -0.145, -0.11]} />
          </group>
          <group position={[232.474, 52.218, -92.463]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-15.715, 0, 1.109]} rotation={[0, 1.571, 0]} scale={[1.056, 0.919, 0.952]}>
              <group position={[-15.52, 0, 0]}>
                <mesh geometry={nodes['04_Design_books_655_Cover_17_0'].geometry} material={materials['Cover_17.001']} />
                <mesh geometry={nodes['04_Design_books_655_pages_5_0'].geometry} material={materials['pages_5.001']} />
              </group>
            </group>
            <group position={[-15.715, 0, -1.109]} rotation={[0, 1.571, 0]} scale={[1.056, 0.919, 0.952]}>
              <group position={[-17.62, 0, 0]}>
                <mesh geometry={nodes['04_Design_books_656_Cover_18_0'].geometry} material={materials['Cover_18.001']} />
                <mesh geometry={nodes['04_Design_books_656_pages_5_0'].geometry} material={materials['pages_5.001']} />
              </group>
            </group>
          </group>
          <group position={[-171.578, 100, -174.175]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Group_001_Color_M03_0.geometry} material={materials['Color_M03.001']} position={[18.634, -3.325, -6.15]} />
          </group>
          <group position={[-116.506, 161.91, -151.375]} rotation={[-Math.PI / 2, 0, 0]} scale={0.812}>
            <mesh geometry={nodes.Layer0_001_vray_PDM_Books_07_ksiazki_bialy_0.geometry} material={materials['vray_PDM_Books_07_ksiazki_bialy.001']} />
            <mesh geometry={nodes.Layer0_001_vray_PDM_Books_07_ksiazki_bok_0.geometry} material={materials['vray_PDM_Books_07_ksiazki_bok.001']} />
            <mesh geometry={nodes.Layer0_001_vray_PDM_Books_07_ksiazki_color_0.geometry} material={materials['vray_PDM_Books_07_ksiazki_color.001']} />
            <mesh geometry={nodes.Layer0_001_vray_PDM_Books_07_ksiazki_front_0.geometry} material={materials['vray_PDM_Books_07_ksiazki_front.001']} />
            <mesh geometry={nodes.Layer0_001_vray_PDM_Books_07_ksiazki_kolor_0.geometry} material={materials['vray_PDM_Books_07_ksiazki_kolor.001']} />
            <mesh geometry={nodes.Layer0_001_vray_PDM_Books_07_Redwood_0.geometry} material={materials['vray_PDM_Books_07_Redwood.001']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['LayerP06_Material_#2097633432_0'].geometry} material={materials['Material_2097633432.001']} position={[-0.174, -0.228, -0.599]} />
          </group>
          <group position={[-70.623, 63.75, -93.395]} rotation={[0, -1.569, 0]}>
            <mesh geometry={nodes['Line012_Material_#61_0'].geometry} material={materials['Material_61.001']} position={[24.253, -0.153, -28.342]} />
            <mesh geometry={nodes['Line012_Material_#62_0'].geometry} material={materials['Material_62.001']} position={[24.234, -0.153, -28.305]} />
            <mesh geometry={nodes['Line012_Material_#63_0'].geometry} material={materials['Material_63.001']} position={[24.23, -0.15, -28.3]} />
          </group>
          <mesh geometry={nodes.Screen.geometry} position={[-130.259, 76.774, -150.808]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshBasicMaterial map={textureVSCode} toneMapped={false} />
          </mesh>
          <group position={[-70.623, 63.75, -93.395]} rotation={[0, -1.569, 0]}>
            <mesh geometry={nodes['Object008_Material_#2097633444_0'].geometry} material={materials['Material_2097633444.001']} position={[24.23, -0.15, -28.3]} />
          </group>
          <group position={[-98.899, 0.24, 116.957]} rotation={[-Math.PI / 2, 0, 0.698]} scale={[1.186, 1.186, 1.265]}>
            <group position={[15.524, 38.747, -0.106]}>
              <mesh geometry={nodes['Object018_Material_#2097633434_0'].geometry} material={materials['Material_2097633434.001']} />
              <mesh geometry={nodes['Object018_Material_#2097633434_0001'].geometry} material={materials['Material_2097633434.001']} />
            </group>
          </group>
          <group position={[26.138, 42.6, -2.921]} rotation={[-Math.PI / 2, 0, 3.133]} scale={[0.825, 0.825, 1.004]}>
            <mesh geometry={nodes['40_book3_0'].geometry} material={materials['book3.001']} position={[7.732, -6.582, 0.571]} rotation={[Math.PI / 2, 0.96, Math.PI / 2]} />
            <mesh geometry={nodes['41_book4_0'].geometry} material={materials['book4.001']} position={[8.706, -7.339, -0.928]} rotation={[Math.PI / 2, 0.96, Math.PI / 2]} />
            <mesh geometry={nodes['43_pages_0'].geometry} material={materials['pages.001']} position={[0.929, -1.818, 1.107]} rotation={[-Math.PI, 0, 0.611]} />
            <mesh geometry={nodes['44_pages_0'].geometry} material={materials['pages.001']} position={[1.903, -2.576, -0.392]} rotation={[-Math.PI, 0, 0.611]} />
          </group>
          <group position={[151.433, 0.911, 22.465]} rotation={[Math.PI / 2, 0, 1.573]} scale={-0.902}>
            <mesh geometry={nodes['������������_Material_#2097633442_0'].geometry} material={materials['Material_2097633442.001']} />
            <mesh geometry={nodes['������������_Material_#2097633442_0001'].geometry} material={materials['Material_2097633442.001']} />
          </group>
          <mesh geometry={nodes['Box015_Material_#353_0'].geometry} material={materials['Material_353.001']} position={[115, 122, -181.5]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Box051_Material_#2097633443_0'].geometry} material={materials['Material_2097633443.001']} position={[44.973, 35.24, 43.788]} rotation={[-Math.PI / 2, 0, 3.138]} scale={0.79} />
          <mesh geometry={nodes['Box056_���������������_0'].geometry} material={materials['material.001']} position={[50.657, 1.212, -33.877]} rotation={[-Math.PI / 2, 0, 3.138]} scale={0.79} />
          <mesh geometry={nodes.Group_002_Color_M03_0.geometry} material={materials['Color_M03.001']} position={[-171.578, 100, 163.925]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Group_021_vray_Color_008_0.geometry} material={materials['vray_Color_008.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object001_Material_#2097633433_0'].geometry} material={materials['Material_2097633433.001']} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object004_Material_#2097633466_0'].geometry} material={materials['Material_2097633466.001']} position={[-130.259, 76.774, -150.808]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object009_Material_#2097633435_0'].geometry} material={materials['Material_2097633435.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object010_Material_#2097633440_0'].geometry} material={materials['Material_2097633440.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object011_Material_#2097633436_0'].geometry} material={materials['Material_2097633436.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object012_Material_#2097633439_0'].geometry} material={materials['Material_2097633439.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object013_Material_#2097633438_0'].geometry} material={materials['Material_2097633438.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object014_Material_#2097633437_0'].geometry} material={materials['Material_2097633437.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object015_Material_#2097633441_0'].geometry} material={materials['Material_2097633441.001']} position={[-49.258, 91.013, 164.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes['Object016_Material_#2097633368_0'].geometry} material={materials['Material_2097633368.001']} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object017_Material_#2097633369_0'].geometry} material={materials['Material_2097633369.001']} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/scene.glb')
