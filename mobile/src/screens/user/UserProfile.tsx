import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import BetweenLinesText from '../../components/common/BetweenLinesText';

const UserProfile = () => {
  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5Icon name='user-circle' size={wp(14)} color='#00496e' />
        <Text style={styles.userName}>Roberto Carlos</Text>

        <View style={styles.headerLabel}>
          <Text style={styles.labelText}>Inquilino</Text>
        </View>
      </View>

      <BetweenLinesText text='Datos personales' isTitle={true} />

      <ScrollView
        contentContainerStyle={{justifyContent: 'center'}}
        style={styles.itemContainer}>
        <Text style={styles.itemHeader}>Nombre completo</Text>
        <Text style={styles.itemText}>Roberto Juanito Carlos</Text>

        <Text style={styles.itemHeader}>DNI</Text>
        <Text style={styles.itemText}>25925918</Text>

        <Text style={styles.itemHeader}>Email</Text>
        <Text style={styles.itemText}>robertocarlos@gmail.com</Text>

        <Text style={styles.itemHeader}>Fecha de nacimiento</Text>
        <Text style={styles.itemText}>10-05-1990</Text>

        <Text style={styles.itemHeader}>Domicilio</Text>
        <Text style={styles.itemText}>Av. de la Universidad 1041</Text>

        <Text style={styles.itemHeader}>Telefono</Text>
        <Text style={styles.itemText}>351-401251</Text>
      </ScrollView>
      <TouchableOpacity style={styles.editCTA}>
        <FontAwesome5Icon
          name='pencil-alt'
          size={20}
          color='#C9F0FD'
          style={{
            left: wp(-15),
          }}
        />
        <Text style={styles.mainCTAText}>Editar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default UserProfile;
