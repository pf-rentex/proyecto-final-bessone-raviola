import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    justifyContent: 'center',
  },
  mainLogoContainer: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  withHorizontalLine: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 65,
  },
  line: {
    borderWidth: 1,
    height: 0,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#000',
    flex: 1
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 22,
    letterSpacing: 2,
    fontSize: 27,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 18,
    color: 'black',
    fontSize: 22,
    marginHorizontal: 50,
    marginTop: 35,
    borderRadius: 6
  },
  mainCTAContainer: {
    marginVertical: 60,
    paddingHorizontal: 50
  },
  mainCTA: {
    backgroundColor: '#135E88',
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 8
  },
  mainCTAText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontSize: 22
  },
  betweenLinesText: {
    color: '#414141',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginHorizontal: 12,
  },
  socialCTAContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginHorizontal: 30,
  },
  socialCTA: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    elevation: 6,
    flexDirection: 'row'
  },
  socialCTAGoogleIcon: {
    borderRadius: 15,
    backgroundColor: 'black',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  socialCTAText: {
    fontSize: 18,
    paddingHorizontal: 8
  },
  footer: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: "row",
    alignSelf: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#222222',
    fontSize: 18,
  },
  footerLink: {
    paddingHorizontal: 8,
    color: '#2B99FF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
