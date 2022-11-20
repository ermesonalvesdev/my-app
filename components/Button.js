import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {

    if (theme === "primary") {
        return (
          <View style={[styles.buttonContainer, {borderRadius: 18 }]}>
            <Pressable style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={onPress}>
              <FontAwesome
                name="plus"
                size={30}
                color="#25292e"
                style={styles.buttonIcon}
              />
            </Pressable>
        </View>      
        );
      }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, { borderWidth: 4, borderColor: "#fff", borderRadius: 10 }]}
      onPress={() => alert('Botão Funcionando!!!')}>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 90,
    height: 90,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    margin: 5,
  },
  button: {
    borderRadius: 45,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
