import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeft} from '../../assets/icons/ArrowLeft';
import {ArrowRight} from '../../assets/icons/ArrowRight';
import {Bell} from '../../assets/icons/Bell';
import {BellOn} from '../../assets/icons/BellOn';
import {Bookmark} from '../../assets/icons/Bookmark';
import {BookmarkFill} from '../../assets/icons/BookmarkFill';
import {Camera} from '../../assets/icons/Camera';
import {Chat} from '../../assets/icons/Chat';
import {ChatOn} from '../../assets/icons/ChatOn';
import {Check} from '../../assets/icons/Check';
import {CheckRound} from '../../assets/icons/CheckRound';
import {ChevronRight} from '../../assets/icons/ChevronRight';
import {Comment} from '../../assets/icons/Comment';
import {ErrorRound} from '../../assets/icons/ErrorRound';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {FlashOff} from '../../assets/icons/FlashOff';
import {FlashOn} from '../../assets/icons/FlashOn';
import {Heart} from '../../assets/icons/Heart';
import {HeartFill} from '../../assets/icons/HeartFill';
import {Home} from '../../assets/icons/Home';
import {HomeFill} from '../../assets/icons/HomeFill';
import {Message} from '../../assets/icons/Message';
import {MessageRound} from '../../assets/icons/MessageRound';
import {MessageRoundLight} from '../../assets/icons/MessageRoundLight';
import {NewPost} from '../../assets/icons/NewPost';
import {Profile} from '../../assets/icons/Profile';
import {ProfileFill} from '../../assets/icons/ProfileFill';
import {Search} from '../../assets/icons/Search';
import {Trash} from '../../assets/icons/Trash';
import {Vector} from '../../assets/icons/Vector';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  if (onPress) {
    return (
      <Pressable hitSlop={30} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bell: Bell,
  bellOn: BellOn,
  bookmark: Bookmark,
  bookmarkFill: BookmarkFill,
  camera: Camera,
  chat: Chat,
  chatOn: ChatOn,
  check: Check,
  checkRound: CheckRound,
  chevronRight: ChevronRight,
  comment: Comment,
  errorRound: ErrorRound,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOff,
  flashOn: FlashOn,
  heart: Heart,
  heartFill: HeartFill,
  home: Home,
  homeFill: HomeFill,
  message: Message,
  messageRound: MessageRound,
  messageRoundLight: MessageRoundLight,
  newPost: NewPost,
  profile: Profile,
  profileFill: ProfileFill,
  search: Search,
  trash: Trash,
  vector: Vector,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
