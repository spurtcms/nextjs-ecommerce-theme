
export const GET_POSTS_SIGN_QUERY = `mutation($singData: MemberDetails!) {
  memberRegister(
    input:$singData
  )
}
  `;
  export const GET_POSTS_LOGIN_QUERY =`mutation($username:String!,$password:String!){
    templateMemberLogin(
      username:$username
      password:$password
    )
  }`


  export const GET_POSTS_LIST_QUERY = `query ecommerceProductList(
    $limit: Int!,
    $offset: Int!,
    $filter: ProductFilter,
    $sort: ProductSort
  ) {
    ecommerceProductList(
      limit: $limit,
      offset: $offset,
      filter: $filter,
      sort: $sort
    ) {
      productList {
        id
        categoriesId
        productName
        productDescription
        productImagePath
        productVideoPath
        sku
      defaultPrice
        isActive
        discountPrice
        specialPrice 
      }
      count
    }
  }
  `;


  export const GET_POSTS_SLUG_QUERY = `query ecommerceProductDetails(
    $productId: Int!, 
  ){
    ecommerceProductDetails(productId:$productId){
      id
      categoriesId
      productName
      productDescription
      productImagePath
      productVideoPath
      sku
      tax
      totalcost
      isActive
      createdOn
      discountPrice
      specialPrice 
  }
  }
  `;
