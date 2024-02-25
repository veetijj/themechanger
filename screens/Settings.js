import React from "react"
import { View } from "react-native"
import ThemeSwitchButton from "../components/ThemeSwitchButton"
import { useTheme } from "../components/useTheme"
import Styles from "../components/Styles"

export default function Settings() {
    const { isDarkMode } = useTheme()

    return(
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton />
        </View>
    )
}