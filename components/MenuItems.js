import React from 'react';
import { Text, View, SectionList } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { menuItemsToDisplay } from '../data/menuData';


const Item = ({ name, price }) => (
    <View style={GlobalStyles.itemContainer}>
        <Text style={GlobalStyles.itemText}>{name}</Text>
        <Text style={GlobalStyles.itemText}>{price}</Text>
    </View>
);

const Separator = () => <View style={GlobalStyles.separator} />;

const MenuItems = () => {
    const renderItem = ({ item, index, section }) => {
        const isLastItem = index === section.data.length -1;
        return (
            <View style={GlobalStyles.itemWrapper}>
              <Item name={item.name} price={item.price} />
              {!isLastItem && <Separator />}
            </View>
        );
    };

    const renderSectionHeader = ({ section: { title } }) => {
        return (
            <Text style={GlobalStyles.sectionHeader}>{title}</Text>
        );
    };

    return (
        <View style={GlobalStyles.menuContainer}>
            <SectionList
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={{ paddingTop: 0}}
                //ItemSeparatorComponent={Separator}
                //SectionSeparatorComponent={SectionSpacer}
            />
        </View>
    );
};


export default MenuItems;

