import { SocialNetworkT } from "../../../utils/types/Header";
import { SocialNetworksT } from "../../../utils/types/Header";

export function HeaderSocials({
  SolcialNetworks,
}: {
  SolcialNetworks: SocialNetworksT;
}): JSX.Element {
  return (
    <>
      {SolcialNetworks.map((social: SocialNetworkT) => (
        <a href={social.href} target="_blanc" key={social.key}>
          <img
            className="logo"
            alt={social.alt}
            src={social.logo}
            data-testid={social.dataTestId}
          />
        </a>
      ))}
      ;
    </>
  );
}
