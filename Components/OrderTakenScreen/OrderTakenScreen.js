import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const OrderTakenScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.orderSummary}>
        <Text style={styles.orderIdText}>Order ID: #212321</Text>
        <Text style={styles.statusText}>Status: IN PROGRESS</Text>
        <Text style={styles.totalBillText}>Total Bill: $200</Text>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.receiveOrderText}>Receive Your Order after 12 minutes</Text>
        {/* Add other order details as needed */}
        {/* For example, you can render the list of ordered items with their details */}
        {/* You can also display the customer's address, delivery time, etc. */}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.showAddressButton}>
          <Text style={styles.showAddressButtonText}>Show Address</Text>
          <MaterialIcon name="location-on" size={20} color="#161616" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.showAddressOnMapButton}>
          <Text style={styles.showAddressOnMapButtonText}>Show Address on Map</Text>
          <MaterialIcon name="map" size={20} color="#161616" />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        {/* Add your desired icons here */}
        <Icon name="phone" size={24} color="#B7DFA1" style={styles.icon} />
        <Icon name="comments" size={24} color="#B7DFA1" style={styles.icon} />
        <Icon name="star" size={24} color="#B7DFA1" style={styles.icon} />
        {/* Add more icons as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616', // Dark background color
  },
  orderSummary: {
    backgroundColor: '#B7DFA1', // Primary color for order summary background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  orderDetails: {
    backgroundColor: '#F5F5F5', // Light background color for order details
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  orderIdText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161616', // Dark background color
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#161616', // Dark background color
    marginBottom: 5,
  },
  totalBillText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#161616', // Dark background color
    marginBottom: 10,
  },
  receiveOrderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B7DFA1', // Primary color for receive order text
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  showAddressButton: {
    backgroundColor: '#B7DFA1', // Primary color for "Show Address" button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAddressButtonText: {
    color: '#161616', // Dark background color
    fontWeight: 'bold',
    fontSize: 16,
  },
  showAddressOnMapButton: {
    backgroundColor: '#B7DFA1', // Primary color for "Show Address on Map" button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAddressOnMapButtonText: {
    color: '#161616', // Dark background color
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default OrderTakenScreen;
