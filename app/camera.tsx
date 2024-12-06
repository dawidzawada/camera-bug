import {View} from "react-native";
import {Camera, useCameraDevice} from "react-native-vision-camera";

export default function CameraScreen() {
    const device = useCameraDevice('back');
    return (
        <View>
            {device && <Camera device={device} style={{width:300, height: 160}} isActive={true} />}
        </View>
    )
}