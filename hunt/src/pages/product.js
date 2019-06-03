import React from "react";
import { WebView } from "react-native";

const Product = ({ navigation }) => (
 <WebView source={{ uri: navigation.state.params.product.url}} />
);


//passando o nome da pagina acessada no topo da pagina
Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title
});
export default Product;
