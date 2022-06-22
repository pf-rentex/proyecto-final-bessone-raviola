import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Claim from '../../components/claims/Claim';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getClaims, deleteClaim} from '../../actions/claims';
import {IClaim, ClaimCategory, ClaimStatus} from '../../reducers/claims';
import Loader from '../../components/common/Loader';

interface IClaimsProps {
  getClaims: Function;
  claims: Array<IClaim>;
  isLoading: boolean;
  deleteClaim: Function;
}

const Claims = ({getClaims, claims, isLoading, deleteClaim}: IClaimsProps) => {
  useFocusEffect(
    React.useCallback(() => {
      getClaims();
    }, []),
  );

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

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      minHeight: hp(100),
    },
    title: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: wp(7),
    },
  });
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#325A77', '#03253E']}
          style={styles.container}>
          <View>
            <Text style={styles.title}>Reclamos</Text>
          </View>
          {isLoading ? (
            <Loader size={80} color='#5CB9FF' />
          ) : (
            claims.map((claim, index) => {
              return (
                <Claim
                  key={index}
                  id={claim._id}
                  icon={getIcon(claim.category)}
                  title={claim.title}
                  category={claim.category}
                  date={new Date(claim.createdAt).toLocaleDateString()}
                  status={claim.status}
                  deleteClaim={deleteClaim}
                />
              );
            })
          )}

          <View
            style={{
              alignItems: 'flex-end',
              marginVertical: hp(6),
              top: hp(40),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateClaim')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                bottom: 10,
                right: 10,
                height: 70,
                backgroundColor: '#5CB9FF',
                borderRadius: 100,
                elevation: 1,
              }}>
              <MCIcon name='plus' size={30} color='white' />
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

export default connect(mapStateToProps, {getClaims, deleteClaim})(Claims);
