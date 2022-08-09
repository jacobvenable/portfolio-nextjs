import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import About from "components/About";
import ContentContainer from "components/ContentContainer";
import {
  Disclosure,
  DisclosureButton,
  DisclosureContent,
} from "components/Disclosure";
import Faq from "components/Faq";
import Head, { BASE_TITLE } from "components/Head";
import Resume from "components/Resume";
import Stack from "components/Stack";

const IndexPage = () => {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <>
      <Head
        description="The portfolio of Jacob Venable, a senior software engineer at Nutrien."
        title={BASE_TITLE}
      />
      <ContentContainer>
        <Stack direction="vertical" padded>
          <About />
          <Disclosure
            idPrefix="learn-more"
            isOpen={isLearnMoreOpen}
            onClose={() => setIsLearnMoreOpen(false)}
            onOpen={() => setIsLearnMoreOpen(true)}
          >
            <DisclosureButton
              color="yellow-light"
              iconProps={{
                icon: faChevronUp,
                transform: { rotate: isLearnMoreOpen ? 180 : 0 },
              }}
              variant="ghost"
            >
              Learn More About Me
            </DisclosureButton>
            <DisclosureContent>
              <Resume />
              <Faq />
            </DisclosureContent>
          </Disclosure>
        </Stack>
      </ContentContainer>
    </>
  );
};

export default IndexPage;
