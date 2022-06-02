import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {ClaimStatus, IClaim, ClaimCategory} from '../../reducers/claims';
import DatePicker from 'react-native-date-picker';
import Attachment from '../../components/common/Attachment/Attachment';
import AttachmentRequest from '../../components/common/Attachment/AttachmentRequest';
import {createClaim} from '../../actions/claims';
import Loader from '../../components/common/Loader';
import {connect} from 'react-redux';

interface ICreateClaimProps {
  createClaim: Function;
  isLoading: boolean;
  route: any;
}

const CreateClaim = ({createClaim, isLoading, route}: ICreateClaimProps) => {
  const styles = StyleSheet.create({
    container: {
      padding: hp(3),
      minHeight: hp('100%'),
    },
    title: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: wp(5),
      marginBottom: hp(1),
    },
    input: {
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: '#5CC0F1',
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('2%'),
      color: 'white',
      fontSize: hp('2.3%'),
      margin: hp('1%'),
      borderRadius: 6,
    },
    dateInput: {
      backgroundColor: 'white',
      paddingVertical: hp('1.3%'),
      paddingHorizontal: wp('2%'),
      width: wp('30%'),
      color: 'black',
      fontSize: hp('2.3%'),
      marginVertical: hp('1%'),
      borderBottomRightRadius: 6,
      borderTopRightRadius: 6,
    },
    iconContainer: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.13,
      height: Dimensions.get('window').width * 0.13,
      backgroundColor: '#263238',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(3),
      marginVertical: wp(1),
    },
    backIconContainer: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.1,
      height: Dimensions.get('window').width * 0.1,
      backgroundColor: '#263238',
      justifyContent: 'center',
      alignItems: 'center',
      //   marginHorizontal: wp(3),
      marginVertical: wp(3),
    },
    dateInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    calendarIcon: {
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('2%'),
      borderTopLeftRadius: 6,
      color: '#4BC4F9',
      borderBottomLeftRadius: 6,
      backgroundColor: 'white',
    },
    descriptionInput: {
      backgroundColor: '#f5f5f5',
      paddingHorizontal: wp('3%'),
      color: 'black',
      fontSize: hp('2%'),
      marginVertical: hp('1%'),
      borderRadius: 6,
    },
    actionsContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      height: hp(8),
    },
    actionButton: {
      backgroundColor: '#20323A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      width: wp(35),
      marginVertical: hp(1),
      marginHorizontal: wp(1),
      borderRadius: 5,
      flexDirection: 'row',
    },
  });

  const navigation = useNavigation();

  const [claimData, setClaimData] = useState<IClaim>({
    title: '',
    description: '',
    technician: 'Técnico', // Change later (the tenant won't choose the technician)
    propertyId: '619947dd6f77679edc5bd7ec', // Change later
    userId: '6158ee0fbee2d07b0bcdb2f4', // Change later
    status: ClaimStatus.pending,
    category: ClaimCategory.electricity,
    dateVisit: new Date().toLocaleDateString(),
    createdAt: new Date().toString(),
    address: 'Belgrano 2624', //Change later (should take the address of the property from which the claim is being submitted)
    claimPictures: [],
  });

  useEffect(() => {
    if (route.params) {
      Object.keys(route.params).map(key => {
        handleChange(route.params[key], key);
      });
    }
  }, [route]);

  const handleChange = (e: any, name: string) => {
    if (Array.isArray(e)) {
      setClaimData({
        ...claimData,
        [name]: claimData[name]
          ? // @ts-ignore
            // @ts-ignore
            claimData[name].concat(e)
          : e,
      });
    } else {
      setClaimData({
        ...claimData,
        [name]: e.nativeEvent.text,
      });
    }
    console.log(claimData);
  };

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const handleFileDelete = (arrayName: string, fileName: string) => {
    setClaimData({
      ...claimData,
      [arrayName]: claimData[arrayName].filter(
        (file: any) => file.name !== fileName,
      ),
    });
  };

  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#325A77', '#03253E']}
          style={styles.container}>
          <View style={styles.backIconContainer}>
            <MCIcon
              name='arrow-left'
              size={wp(5)}
              color='white'
              onPress={() => navigation.navigate('Claims')}
            />
          </View>
          <View style={{marginBottom: hp(3)}}>
            <Text style={styles.title}>Título</Text>
            <TextInput
              style={styles.input}
              onChange={e => handleChange(e, 'title')}
            />
          </View>
          <View>
            <Text style={styles.title}>Categoría</Text>
            <View
              style={{
                flexDirection: 'row',
                padding: hp(3),
                justifyContent: 'space-between',
              }}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={[
                    styles.iconContainer,
                    claimData.category === ClaimCategory.electricity && {
                      backgroundColor: '#4BC4F9',
                    },
                  ]}>
                  <MCIcon
                    name='lightning-bolt'
                    size={wp(8)}
                    color='white'
                    onPress={() =>
                      setClaimData({
                        ...claimData,
                        category: ClaimCategory.electricity,
                      })
                    }
                  />
                </View>
                <Text style={{color: 'white'}}>Electricidad</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={[
                    styles.iconContainer,
                    claimData.category === ClaimCategory.plumbing && {
                      backgroundColor: '#4BC4F9',
                    },
                  ]}>
                  <MCIcon
                    name='water'
                    size={wp(8)}
                    color='white'
                    onPress={() =>
                      setClaimData({
                        ...claimData,
                        category: ClaimCategory.plumbing,
                      })
                    }
                  />
                </View>
                <Text style={{color: 'white'}}>Plomeria</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={[
                    styles.iconContainer,
                    claimData.category === ClaimCategory.infrastructure && {
                      backgroundColor: '#4BC4F9',
                    },
                  ]}>
                  <MCIcon
                    name='tools'
                    size={wp(8)}
                    color='white'
                    onPress={() =>
                      setClaimData({
                        ...claimData,
                        category: ClaimCategory.infrastructure,
                      })
                    }
                  />
                </View>
                <Text style={{color: 'white'}}>Infraestructura</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Fecha de programación de visita</Text>
            <View style={styles.dateInputContainer}>
              <MCIcon
                style={styles.calendarIcon}
                name='calendar-month'
                size={25}
                onPress={() => setShowDatePicker(true)}
              />
              <TextInput
                style={styles.dateInput}
                value={claimData.dateVisit}
                editable={false}
              />
              <DatePicker
                modal
                open={showDatePicker}
                date={new Date(claimData.dateVisit)}
                onConfirm={date => {
                  setClaimData({
                    ...claimData,
                    dateVisit: date.toLocaleDateString(),
                  });
                  setShowDatePicker(false);
                }}
                onCancel={() => {
                  setShowDatePicker(false);
                }}
              />
            </View>
          </View>
          <View style={{marginVertical: hp('3%')}}>
            <Text style={styles.title}>Adjunte Fotos</Text>
            {claimData.claimPictures &&
              claimData.claimPictures.map((claimPicture: any, index: any) => (
                <Attachment
                  key={index}
                  name={claimPicture.name || claimPicture.id}
                  size={`${claimPicture.size || '2253647'} Kb`}
                  handleDelete={() =>
                    handleFileDelete('claimPictures', claimPicture.name)
                  }
                />
              ))}
            {/* <Attachment name='garante_perez_12052021.pdf' size='216.32kb' /> */}
            <AttachmentRequest
              fileType='claimPictures'
              redirectView='CreateClaim'
            />
          </View>
          <View>
            <Text style={styles.title}>Descripción</Text>
            <View>
              <TextInput
                style={styles.descriptionInput}
                multiline
                numberOfLines={3}
                onChange={e => handleChange(e, 'description')}
              />
            </View>
          </View>
          <View style={styles.actionsContainer}>
            {isLoading ? (
              <Loader size={50} color='#5CB9FF' />
            ) : (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {
                  createClaim(claimData);
                }}>
                <MCIcon name='check-circle' size={20} color='#56CD70' />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    paddingLeft: 5,
                  }}>
                  CONFIRMAR
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.actionButton}>
              <MCIcon name='close-circle' size={20} color='#FF5353' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                CANCELAR
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  claims: state.claims.claims,
  isLoading: state.claims.isLoading,
});

export default connect(mapStateToProps, {createClaim})(CreateClaim);
