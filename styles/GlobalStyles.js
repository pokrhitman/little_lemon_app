import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const GlobalStyles = StyleSheet.create({

    // -------------------------
    // 🌐 Global Base Styles
    // --------------------------

    container: {
        flex: 1,
        backgroundColor: '#333333',
    },

    scrollViewPadding: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },

    centeredForm: {
        alignSelf: 'center',
        width: windowWidth > 600 ? 500 : '100%',
    },

    // -------------------------------
    // 🧾 Form Inputs (Shared)
    // ------------------------------

    inputBase: {
        borderWidth: 2,
        borderColor: '#F4CE14',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 16,
    },

    input: {
        height: 40,
    },

    messageInput: {
        height: 100,
        textAlignVertical: 'top',
    },

    label: {
        color: '#EDEFEE',
        fontSize: 16,
        marginTop: 15,
        marginBottom: 5,
    },

    // -------------------------------
    // 🎯 Button Styles
    //------------------------------

    button: {
        backgroundColor: '#F4CE14',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // -------------------------------
    // 🧩 Section Layout & Containers
    // ------------------------------


    sectionContainer: {
        backgroundColor: '#495E57',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
    },


    // -------------------------------
    // 🧩  📄 Styles for App.js
    // ------------------------------

    safeArea: {
        flex: 1,
        backgroundColor: '#333333',
    },

    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#EDEFEE',
        borderRadius: 20,
        marginBottom: 10,
    },

    navButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F4CE14',
        borderRadius: 10,
    },

    navText: {
        color: '#333',
        fontWeight: 'bold',
    },

    headerOuter: {
        paddingVertical: 10,
    },

    headerInner: {
        backgroundColor: '#EE9972',
        borderRadius: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 30,
    },

    bodyContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20,
    },

    menuContainer: {
        flex: 1,
    },

    footerOuter: {
        paddingVertical: 10,
    },

    footerInner: {
        backgroundColor: '#EE9972',
        borderRadius: 30,
        marginHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
    },


    // -------------------------------
    // 🧾 Feedback Form Styles
    // -----------------------------

    feedbackSectionWrapper: {
        flex: 1,
        backgroundColor: '#495E57',
    },

    introContainer: {
        marginBottom: 10,
        borderRadius: 20,
        padding: 15,
        backgroundColor: '#495E57',
        width: windowWidth > 600 ? 500 : '100%',
        alignSelf: 'center',
    },

    infoSection: {
        fontSize: 18,
        color: '#EDEFEE',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        maxWidth: 500,
        alignSelf: 'center',
    },

    sectionHeading: {
        fontSize: 22,
        color: '#EDEFEE',
        textAlign: 'center',
        marginBottom: 10,
    },

    sectionSubheading: {
        fontSize: 20,
        color: '#EDEFEE',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },

    formContainer: {
        backgroundColor: '#495E57',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        alignSelf: 'center',
        width: windowWidth > 600 ? 500 : '100%',
    },

    // -------------------------------
    // 🦶 Footer Styles section.
    // -----------------------------

    footerContainer: {
        backgroundColor: '#EE9972',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 20,
    },

    footerText: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },


    // -------------------------------
    // Little Lemon Header
    // -----------------------------

    headerContainer: {
        backgroundColor: '#EE9972',
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 20,
    },

    headerText: {
        paddingVertical: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },


    // -------------------------------
    // Login Screen
    // -----------------------------


    loginContainer: {
        backgroundColor: '#495E57',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        width: windowWidth > 600 ? 400 : '90%',
        alignSelf: 'center',
    },

    loginHeaderText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#EDEFEE',
        textAlign: 'center',
        marginBottom: 10,
    },

    regularText: {
        fontSize: 20,
        marginBottom: 20,
        color: '#EDEFEE',
        textAlign: 'center',
        paddingHorizontal: 10,
    },

    loginSuccessMessage: {
        color: '#F4CE14',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },


    // -------------------------------
    // Menu Items
    // -----------------------------

    menuSectionWrapper: {
        flex: 1,
        backgroundColor: '#333333',
        paddingHorizontal: 20,
    },

    menuContainer: {
        flex: 1,
        backgroundColor: '#495E57',
        paddingHorizontal: 3,
        //maxWidth: 600,
        width: '100%',
        paddingTop: 0,
        marginTop: -12,
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },

    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#F4CE14',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 6,
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: '#495E57'
    },

    itemText: {
        color: '#F4CE14',
        fontSize: 18,
    },

    itemWrapper: {
        backgroundColor: '#333333',
    },

    separator: {
        height: 1,
        backgroundColor: '#EDEFEE',
    },

    // -------------------------------
    // Welcome Screen
    // -----------------------------

    welcomeContainer: {
        backgroundColor: '#660000',
        alignItems: 'center',
        paddingVertical: Dimensions.get('window').height * 0.02,
        paddingHorizontal: 20,
        borderRadius: 30,
    },

    welcomeTitle: {
        fontSize: Dimensions.get('window').width > 600 ? 36 : 26,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },

    welcomeSubtitle: {
        fontSize: Dimensions.get('window').width > 600 ? 24 : 18,
        color: 'white',
        textAlign: 'center',
    },

});

export default GlobalStyles;
