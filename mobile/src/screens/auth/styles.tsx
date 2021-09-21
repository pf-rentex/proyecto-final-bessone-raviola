import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

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
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: wp('2%'),
    letterSpacing: 2,
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  onboardingTitle: {
    color: '#00639B',
    fontWeight: 'bold',
    fontSize: wp('7.5%'),
  },
  header: {
    position: 'absolute',
    top: hp('5%'),
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingBox: {
    position: 'absolute',
    top: hp('26%'),
    width: wp('85%'),
    height: hp('68%'),
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  onboardingMsg: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 50,
    fontSize: wp('2.5%'),
  },
  onboardingLogo: {
    width: 70,
    height: 70,
  },
  divider: {
    borderBottomColor: '#00639B',
    opacity: 0.5,
    borderBottomWidth: 1,
    width: '70%',
    marginVertical: 5,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: hp('1.8%'),
    fontWeight: 'bold',
    color: '#21577E',
    marginVertical: hp('3%'),
  },
  input: {
    backgroundColor: '#f5f5f5',
    paddingVertical: hp('1.4%'),
    paddingHorizontal: wp('2%'),
    color: 'black',
    fontSize: hp('2.3%'),
    marginHorizontal: wp('10%'),
    marginTop: hp('3%'),
    borderRadius: 6,
  },
  mainCTAContainer: {
    marginVertical: hp('5%'),
    paddingHorizontal: wp('10%'),
  },
  mainCTA: {
    backgroundColor: '#135E88',
    paddingVertical: hp('1.5%'),
    borderRadius: 12,
    elevation: 6,
  },
  mainCTAText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontSize: hp('2%'),
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
    flexDirection: 'row',
  },
  socialCTAGoogleIcon: {
    borderRadius: 15,
    backgroundColor: 'black',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialCTAText: {
    fontSize: hp('1.5%'),
    paddingHorizontal: wp('2%'),
  },
});
