import {
  CameraControls,
  ContactShadows,
  Shadow,
  Sky,
  Environment,
  Text,
  Sphere,
  useTexture,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { Base } from "./Base";
import { Eden } from "./Eden";

const Dots = (props) => {
  const { loading } = useChat();
  const [loadingText, setLoadingText] = useState("");
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingText((loadingText) => {
          if (loadingText.length > 2) {
            return ".";
          }
          return loadingText + ".";
        });
      }, 800);
      return () => clearInterval(interval);
    } else {
      setLoadingText("");
    }
  }, [loading]);
  if (!loading) return null;
  return (
    <group {...props}>
      <Text fontSize={0.14} anchorX={"left"} anchorY={"bottom"}>
        {loadingText}
        <meshBasicMaterial attach="material" color="black" />
      </Text>
    </group>
  );
};

export const Experience = () => {
  const cameraControls = useRef();
  const { cameraZoomed } = useChat();

  useEffect(() => {
    cameraControls.current.setLookAt(0, 2, 5, 0, 1.5, 0);
  }, []);

  useEffect(() => {
    if (cameraZoomed) {
      cameraControls.current.setLookAt(0, 1.5, 1.5, 0, 1.5, 0, true);
    } else {
      cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.2, 0, true);
    }
  }, [cameraZoomed]);


  const texture = useTexture("bg.jpg");
  const texture0 = useTexture("dojo.jpg");



  return (
    <>
      <CameraControls ref={cameraControls} smoothTime={0.75} draggingSmoothTime={0.5} />
      <Environment preset="sunset" />
      {/* <Sky /> */}
      {/* Wrapping Dots into Suspense to prevent Blink when Troika/Font is loaded */}
      {/* <Suspense>
        <Dots position-y={1.8} position-x={-0.02} />
      </Suspense> */}
      {/* <directionalLight castShadow intensity={0.2} /> */}
      {/* <Base /> */}
      {/* <mesh position={[0, 1.5, -2]} >
        <planeGeometry args={[5.4, 5.8]} />
        <meshBasicMaterial map={texture} />
      </mesh> */}
      <mesh position={[0, 1.3, -1.5]} >
        <planeGeometry args={[5 / 1.7, 10 / 1.7]} />
        <meshBasicMaterial map={texture0} />
      </mesh>
      <Eden />
    </>
  );
};
