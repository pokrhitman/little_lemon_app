import { useContext } from 'react';
import {
    ScrollView,
    View,
    SectionList,
    Text,
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';
import { ThemeContext } from '../theme/ThemeContext';
import { menuItemsToDisplay } from '../data/menuData';

export default function MenuScreen() {
    const { theme } = useContext(ThemeContext);
    const { colors } = theme;


    const renderItem = ({ item, index, section }) => {
        const isLast = index === section.data.length - 1;

        return (
            <View style={GlobalStyles.itemWrapper}>
                <View style={GlobalStyles.itemContainer}>
                    <Text style={GlobalStyles.itemText}>{item.name}</Text>
                    <Text style={GlobalStyles.itemText}>{item.price}</Text>
                </View>
                {!isLast && <View style={GlobalStyles.separator} />}
            </View>
        );
    };

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={GlobalStyles.sectionHeader}>{title}</Text>
    );

    return (
        <ScrollView
            style={{ backgroundColor: colors.background }}
            contentContainerStyle={{
                paddingVertical: 20,
                alignItems: 'center',
            }}
        >
            <View
                style={[
                    GlobalStyles.menuContainer,
                    {
                        backgroundColor: colors.background,
                        width: '100%',
                        maxWidth: 600,

                    },
                ]}
            >
                <SectionList
                    sections={menuItemsToDisplay}
                    keyExtractor={(item, idx) => item.name + idx}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    contentContainerStyle={{
                        paddingTop: 0,
                        paddingBottom: 40,
                    }}
                />
            </View>
        </ScrollView>
    );
}


