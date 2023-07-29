import gql from 'graphql-tag'

export const products = gql`
    query {
        products {
            id
            name
            status
            description
            barcode
            item_code
            serial
        }
    }
`

export const productsPaginate = gql`
    query ($first: Int!, $page: Int) {
        productsPaginate(first: $first, page: $page) {
            data {
                id
                name
                status
                description
                barcode
                item_code
                serial
            }
        }
    }
`
