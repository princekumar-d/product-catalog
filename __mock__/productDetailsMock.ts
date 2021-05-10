import QUERY_PRODUCT from "../queries/queryProduct.graphql";

export const productsWithUserMockData = [
  {
    request: {
      query: QUERY_PRODUCT,
      variables: { id: "2" },
    },
    result: {
      data: {
        product: {
          id: "2",
          image_key: "SD_01_T38_1502_QA_X_EC_90",
          name: "Round Neck Jumper",
          offer_ids: ["2", "3", "5", "4"],
          price: {
            currency_code: "GBP",
            current_price: 1250,
            original_price: 1400,
          },
          information: [
            {
              section_text:
                'A chic and versatile addition to any wardrobe, this long sleeved jumper is wonderfully soft to give your outfits as much style as comfort and has been treated with our StaySoft™ technology so it stays that way even after repeated washes. With ribbed trims and a comfy regular fit, this women’s jumper is sure to become your new staple.\r\n\r\nCare and composition\r\nComposition\r\n100% acrylic\r\nCare instructions\r\nMachine washable even at 30º\r\nTumble dry\r\nKeep away from fire and flames\r\n\r\nItem details\r\nModel Height: 5ft 9"/175cm\r\nModel is wearing size: 8\r\n\r\nFit and style\r\nProduct Style: Jumpers\r\nRegular fit\r\nNeck to hem length: 61cm\r\nThe length measurement above relates to a size 12 regular. Length will vary slightly according to size\r\nRibbed trim\r\n',
              section_title: "",
            },
          ],
        },
      },
    },
  },
];
