import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { btn1, colors, hr80, titles } from "../../globals/style";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const SignUpScreen = (navigation) => {
  const [userfocus, setUserfocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign up</Text>
      {/* User Start */}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={userfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onFocus={() => {
            setUserfocus(true);
            setEmailfocus(false);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setShowpassword(false);
          }}
        />
      </View>
      {/*User End  */}

      {/* Email Start */}
      <View style={styles.inputout}>
        <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setUserfocus(false)
            setEmailfocus(true);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setShowpassword(false);
          }}
        />
      </View>
      {/*Email End  */}

      {/* Phone No Start */}
      <View style={styles.inputout}>
      
        <Feather
          name="smartphone"
          size={24}
          color={phonefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onFocus={() => {
            setUserfocus(false)
            setEmailfocus(false);
            setPhonefocus(true);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setShowpassword(false);
          }}
        />
      </View>
      {/*Phone No End  */}

      {/* Password Start */}
      <View style={styles.inputout}>
        <MaterialIcons
          name="lock-outline"
          size={24}
          color={passwordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setUserfocus(false);
            setEmailfocus(false);
            setPhonefocus(false);
            setPasswordfocus(true);
            setcPasswordfocus(false);
            setShowpassword(false);
          }}
          secureTextEntry={showpassword === false ? true : false}
        />
        <Octicons
          name={showpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>
      {/* Password End */}

      {/*Confirm Password Start */}
      <View style={styles.inputout}>
        <MaterialIcons
          name="lock-outline"
          size={24}
          color={cpasswordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onFocus={() => {
            setUserfocus(false)
            setEmailfocus(false);
            setPhonefocus(false)
            setcPasswordfocus(true);
            setPasswordfocus(false);
          }}
          secureTextEntry={showCpassword === false ? true : false}
        />
        <Octicons
          name={showCpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowCpassword(!showCpassword)}
        />
      </View>
      {/* Confirm Password End */}

      {/* Address Start */}
      <Text style={styles.address}>Please Enter your address</Text>
      <View style={styles.inputout}>
        <TextInput style={styles.input1} placeholder="Enter Your Adderss" />
      </View>
      {/* Address End */}

      <TouchableOpacity style={btn1}>
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntxt,
            fontWeight: "bold",
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>

      {/* <Text style={styles.forgot}>Forgot Password</Text> */}
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="facebook-square" size={24} color="#3366cc" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>
      <Text>
        Already have an account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("login")}
        >
          {" "}
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 60,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    // textTransform: 'uppercase'
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "center",
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftxt: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: "center",
    marginTop: 20,
  }
});
export default SignUpScreen;
