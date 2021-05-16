type AvailableBadgesProps = {
  availableBadges: string;
};

type ReturnParseAvailableBadges = (AvailableBadgesProps) => Badge[];

type AvailbleOffersProps = {
  productOffers: string[];
  userOffers: Offer[];
};

type ReturnAvailableOffers = (ReturnParseAvailableBadges) => Offer[];

type ApplicableBadgesProps = {
  offers: Offer[];
  badges: Badge[];
};

type ReturnApplicableBadge = (ApplicableBadgesProps) => Badge | null;

export const parseAvailableBadges: ReturnParseAvailableBadges = ({
  availableBadges,
}: AvailableBadgesProps) => {
  const badgeStrings = availableBadges.split("||");
  const badges = badgeStrings.map((badgeString) => {
    const badgeSplitString = badgeString.split(":");
    return {
      name: badgeSplitString[0],
      badgeTypes: badgeSplitString[1].split(","),
    };
  });
  return badges as Badge[];
};

export const parseAvailableOffersForProduct: ReturnAvailableOffers = ({
  productOffers,
  userOffers,
}: AvailbleOffersProps) => {
  return userOffers.filter((userOffer) => productOffers.includes(userOffer.id));
};

export const applicableBadge: ReturnApplicableBadge = ({
  offers,
  badges,
}: ApplicableBadgesProps) => {
  for (let i = 0; i < badges.length; i++) {
    if (
      offers.find((offer) =>
        badges[i].badgeTypes.includes(offer.type.toString())
      )
    ) {
      return badges[i];
    }
  }
  return null;
};
