import {Button, Text, View} from "react-native";
import React, {useEffect} from "react";
import {useCameraPermission} from "react-native-vision-camera";
import {router, useFocusEffect} from "expo-router";
import {lockPlatformAsync, Orientation} from "expo-screen-orientation";

export default function PermissionsScreen() {
    const {requestPermission} = useCameraPermission()

    useEffect(() => {
        void requestPermission()
    }, []);

    useFocusEffect(() => {
        // Set portrait orientation for permissions screen
        const asyncEffect = async () => {
            await lockPlatformAsync({screenOrientationArrayIOS: [
                    Orientation.PORTRAIT_UP,
                ]
            })
        }
        asyncEffect()
    })


    const handlePress = async () => {
        // Set landscape orientation, then go to camera screen
        const asyncEffect = async () => {
            await lockPlatformAsync({screenOrientationArrayIOS: [
                    Orientation.LANDSCAPE_LEFT,
                    Orientation.LANDSCAPE_RIGHT
                ]
            })
            router.push('/camera')
        }
        asyncEffect()

    }

    return (
        <View>
            <Text>Permissions</Text>
            <Button title="Go to camera" onPress={handlePress} />
        </View>
    )
}