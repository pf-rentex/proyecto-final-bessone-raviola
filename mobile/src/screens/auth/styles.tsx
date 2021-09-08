import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    justifyContent: 'center',
  },
  mainLogoContainer: {
    flex: 1,
    paddingVertical: hp(2),
    height: 20,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: wp('2%'),
    letterSpacing: 2,
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: hp('1.8%'),
    fontWeight: 'bold',
    color: '#21577E',
    marginVertical: hp('3%')
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: hp('1.4%'),
    paddingHorizontal: wp('2%'),
    color: 'black',
    fontSize: hp('2.3%'),
    marginHorizontal: wp('10%'),
    marginTop: hp('3%'),
    borderRadius: 6
  },
  mainCTAContainer: {
    marginVertical: hp('5%'),
    paddingHorizontal: wp('10%')
  },
  mainCTA: {
    backgroundColor: '#135E88',
    paddingVertical: hp('1.5%'),
    borderRadius: 12,
    elevation: 6
  },
  mainCTAText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontSize: hp('2%')
  },
  socialCTAContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
    marginHorizontal: wp('8%'),
  },
  socialCTA: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    width: wp('30%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
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
    fontSize: hp('1.5%'),
    paddingHorizontal: wp('2%')
  },
});
