import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {getClaim, updateClaim} from '../../actions/claims';
import {IClaim, ClaimCategory, ClaimStatus} from '../../reducers/claims';
import Dropdown from '../../components/common/Dropdown';
import Loader from '../../components/common/Loader';
import {useNavigation} from '@react-navigation/native';

interface IClaimDetailsProps {
  route: any;
  getClaim: Function;
  updateClaim: Function;
  claim: IClaim;
  isLoading: boolean;
  isUpdating: boolean;
  claims: Array<IClaim>;
}

const ClaimDetails = ({
  route,
  getClaim,
  updateClaim,
  claim,
  isLoading,
  isUpdating,
  claims,
}: IClaimDetailsProps) => {
  const params = route.params;
  const navigation = useNavigation();
  useEffect(() => {
    getClaim(params.id);
  }, [params.id]);

  useEffect(() => {
    if (!isLoading) setClaimData(claim);
  }, [isLoading]);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return [year, month, day].join('-');
  };

  const dropdownCategoryOptions = [
    {label: ClaimCategory.plumbing, value: ClaimCategory.plumbing},
    {label: ClaimCategory.electricity, value: ClaimCategory.electricity},
    {label: ClaimCategory.infrastructure, value: ClaimCategory.infrastructure},
  ];

  const handleCategoryChange = (category: any) => {
    setClaimData({...claimData, category: category.value});
  };

  const dropdownStatusOptions = [
    {label: ClaimStatus.addressed, value: ClaimStatus.addressed},
    {label: ClaimStatus.pending, value: ClaimStatus.pending},
    {label: ClaimStatus.cancelled, value: ClaimStatus.cancelled},
  ];

  const handleStatusChange = (status: any) => {
    setClaimData({...claimData, status: status.value});
  };

  const getIcon = (category: string) => {
    switch (category) {
      case ClaimCategory.electricity:
        return 'lightning-bolt';
      case ClaimCategory.plumbing:
        return 'water';
      case ClaimCategory.infrastructure:
        return 'tools';
      default:
        return 'lightning-bolt';
    }
  };

  const [statusColor, setStatusColor] = useState('green');
  useEffect(() => {
    switch (claim.status) {
      case ClaimStatus.addressed:
        setStatusColor('lightgreen');
        break;
      case ClaimStatus.inProgress:
        setStatusColor('yellow');
        break;
      case ClaimStatus.cancelled:
        setStatusColor('red');
        break;
      case ClaimStatus.pending:
        setStatusColor('yellow');
        break;
    }
  }, [claim.status]);

  const [nextClaimId, setNextClaimId] = useState<string | undefined>('');

  const [previousClaimId, setPreviousClaimId] = useState<string | undefined>(
    '',
  );

  useEffect(() => {
    //@ts-ignorets-ignore
    setNextClaimId(
      claims[claims.indexOf(claims.find(x => x._id === claim._id)) + 1]?._id,
    );
    //@ts-ignorets-ignore
    setPreviousClaimId(
      claims[claims.indexOf(claims.find(x => x._id === claim._id)) - 1]?._id,
    );
  }, [claims, claim]);

  const handleChange = (e: any, name: string) => {
    setClaimData({...claimData, [name]: e.nativeEvent.text});
  };

  const [editing, setEditing] = useState<boolean>(false);
  const [claimData, setClaimData] = useState<IClaim>(claim);

  let [inputBG, setInputBG] = useState<Object>({
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 3,
    padding: 5,
  });

  useEffect(() => {
    setInputBG(
      editing
        ? {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 3,
            padding: wp(2),
            margin: wp(2),
          }
        : {},
    );
  }, [editing]);

  const styles = StyleSheet.create({
    container: {
      padding: wp(3),
      height: hp(100),
    },
    title: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: wp(5),
    },
    titleContainer: {
      // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: hp(15),
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
    },
    infoContainer: {
      flex: 2,
      paddingLeft: wp(8),
    },
    infoText: {
      color: 'white',
      margin: hp(1),
      fontSize: wp(4),
    },
    button: {
      backgroundColor: '#20323A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: wp(3),
      width: wp(45),
      marginVertical: hp(1),
      marginHorizontal: wp(1),
      height: hp(5),
      borderRadius: 5,
      flexDirection: 'row',
    },
    actionButton: {
      backgroundColor: '#20323A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      width: wp(30),
      marginVertical: hp(1),
      marginHorizontal: wp(1),
      borderRadius: 5,
      flexDirection: 'row',
    },
    descriptionContainer: {
      paddingLeft: wp(10),
      height: hp(30),
      flex: 1,
    },

    actionsContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      height: hp(8),
    },
    navigationContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      height: hp(8),
    },
  });
  return (
    <View>
      <ScrollView>
        <LinearGradient colors={['#325A77', '#03253E']}>
          {isLoading ? (
            <Loader size={80} color='#5CB9FF' />
          ) : (
            <View style={styles.container}>
              <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                {!isUpdating ? (
                  !editing ? (
                    <MCIcon
                      name='pencil-circle'
                      style={{
                        color: '#57A6ED',
                        marginHorizontal: wp(3),
                        elevation: 1,
                      }}
                      size={wp(8)}
                      onPress={() => {
                        setEditing(true);
                      }}
                    />
                  ) : (
                    <View style={{flexDirection: 'row'}}>
                      <MCIcon
                        name='check-circle'
                        style={{color: '#56CD70', marginHorizontal: wp(1)}}
                        size={wp(7)}
                        onPress={() => {
                          updateClaim(claimData);
                          setEditing(false);
                        }}
                      />
                      <MCIcon
                        name='close-circle'
                        style={{color: '#FF5353'}}
                        size={wp(7)}
                        onPress={() => {
                          setEditing(false);
                          setClaimData(claim);
                        }}
                      />
                    </View>
                  )
                ) : (
                  <Loader size={30} color='#5CB9FF' />
                )}
              </View>
              <View style={styles.titleContainer}>
                <View style={styles.iconContainer}>
                  <MCIcon
                    name={
                      editing
                        ? getIcon(claimData.category)
                        : getIcon(claim.category)
                    }
                    size={wp(8)}
                    color='white'
                  />
                </View>
                <TextInput
                  style={[styles.title, inputBG]}
                  editable={editing}
                  value={!editing ? claim.title : claimData.title}
                  onChange={e => handleChange(e, 'title')}
                />
              </View>
              <View style={styles.infoContainer}>
                {!editing ? (
                  <Text style={styles.infoText}>
                    Categoría: {claim.category}
                  </Text>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.infoText}>Categoría:</Text>
                    <Dropdown
                      label='Categoría'
                      defaultValue={{
                        label: claimData.category,
                        value: claimData.category,
                      }}
                      data={dropdownCategoryOptions}
                      onSelect={handleCategoryChange}
                      width={30}
                    />
                  </View>
                )}
                {!editing ? (
                  <Text style={styles.infoText}>
                    Estado:{' '}
                    <Text style={{color: statusColor, fontWeight: 'bold'}}>
                      {claim.status?.toUpperCase()}
                    </Text>
                  </Text>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.infoText}>Estado:</Text>
                    <Dropdown
                      label='Estado'
                      defaultValue={{
                        label: claimData.status,
                        value: claimData.status,
                      }}
                      data={dropdownStatusOptions}
                      onSelect={handleStatusChange}
                      width={30}
                    />
                  </View>
                )}
                <Text style={styles.infoText}>
                  Fecha de carga:{' '}
                  {formatDate(
                    new Date(!editing ? claim.createdAt : claimData.createdAt),
                  )}
                </Text>
                <Text style={styles.infoText}>
                  Fecha de visita programada:{' '}
                  {formatDate(
                    new Date(!editing ? claim.dateVisit : claimData.dateVisit),
                  )}
                </Text>
                <TouchableOpacity style={styles.button}>
                  <MCIcon name='calendar-edit' size={20} color='white' />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      paddingLeft: 5,
                    }}>
                    REPROGRAMAR
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.infoText}>Domicilio propiedad: </Text>
                  <TextInput
                    style={[styles.infoText, inputBG]}
                    editable={editing}
                    value={!editing ? claim.address : claimData.address}
                    onChange={e => handleChange(e, 'address')}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.infoText}>Técnico responsable: </Text>
                  <TextInput
                    style={[styles.infoText, inputBG]}
                    editable={editing}
                    value={!editing ? claim.technician : claimData.technician}
                    onChange={e => handleChange(e, 'technician')}
                  />
                </View>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Descripción</Text>
                <TextInput
                  style={[{color: 'white', fontSize: wp(4)}, inputBG]}
                  editable={editing}
                  multiline
                  numberOfLines={3}
                  value={!editing ? claim.description : claimData.description}
                  onChange={e => handleChange(e, 'description')}
                />
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                  <MCIcon name='check-circle' size={20} color='#56CD70' />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      paddingLeft: 5,
                    }}>
                    RESOLVER
                  </Text>
                </TouchableOpacity>
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
              <View style={styles.navigationContainer}>
                <TouchableOpacity
                  style={[styles.button, !previousClaimId && {opacity: 0.5}]}
                  onPress={() => {
                    navigation.navigate('ClaimDetails', {id: previousClaimId});
                  }}
                  disabled={!previousClaimId}>
                  <MCIcon name='arrow-left-bold' size={15} color='white' />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: wp(3),
                      paddingLeft: 5,
                    }}>
                    RECLAMO ANTERIOR
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, !nextClaimId && {opacity: 0.5}]}
                  onPress={() => {
                    navigation.navigate('ClaimDetails', {id: nextClaimId});
                  }}
                  disabled={!nextClaimId}>
                  <MCIcon name='arrow-right-bold' size={15} color='white' />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: wp(3),
                      paddingLeft: 5,
                    }}>
                    SIGUIENTE RECLAMO
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  claim: state.claims.claim,
  claims: state.claims.claims,
  isLoading: state.claims.isLoading,
  isUpdating: state.claims.isUpdating,
});

export default connect(mapStateToProps, {getClaim, updateClaim})(ClaimDetails);
