import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { FlexRow } from '@components/Flex';
import { Spacer } from '@components/Spacer';
import { IconButton } from '@components/IconButton';

import * as Styled from './Header.sc';

export function Header() {
  return (
    <Styled.Container>
      <LocalPizzaIcon style={{ color: '#fff' }} fontSize="large" />
      <FlexRow>
        <IconButton>
          <ChatBubbleOutlineIcon style={{ color: '#fff' }} />
        </IconButton>
        <Spacer width={24} />
        <IconButton>
          <NotificationsNoneIcon style={{ color: '#fff' }} />
        </IconButton>
        <Spacer width={24} />
        <IconButton>
          <HelpOutlineIcon style={{ color: '#fff' }} />
        </IconButton>
      </FlexRow>
    </Styled.Container>
  );
}
