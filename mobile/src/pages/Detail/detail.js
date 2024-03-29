import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png'

import styles from './detailStyle';
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.title}, estou entrando em contato pos gostaria de ajudar no caso "${incident.description}" com o valor de ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function sendEmail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [ncident.title],
      body: message
    })
  }

  function sendWhastapp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={ logoImg } />
        <TouchableOpacity 
            style={styles.detailsButton} 
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={28} color="#E02041"/>
          </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}> 
          ONG:
        </Text>
        <Text style={styles.incidentValue}> 
          { incident.name } de {incident.city} - {incident.uf}
        </Text>

        <Text style={styles.incidentProperty}> 
          CASO:
        </Text>
        <Text style={styles.incidentValue}> 
        { incident.description }
        </Text>

        <Text style={styles.incidentProperty}> 
          VALOR:
        </Text>
        <Text style={styles.incidentValue}> 
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}> 
          Salve o dia!
        </Text>
        <Text style={styles.heroTitle}> 
          Seja o herói desse caso.
        </Text>

        <Text style={styles.heroDescription}> 
          Entre em contato:
        </Text>

        <View style={styles.actions}>

          <TouchableOpacity 
            style={styles.action} 
            onPress={sendWhastapp}
          >
            <Text style={styles.actionText}> 
              WhatsApp
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.action} 
            onPress={sendEmail}
          >
            <Text style={styles.actionText}> 
              Email
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}