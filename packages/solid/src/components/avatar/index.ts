import { AvatarImg as Img, AvatarRoot as Root } from "./avatar";

import type {
  AvatarImgProps as ImgProps,
  AvatarImgRenderProps as ImgRenderProps,
  AvatarRootProps as RootProps,
  AvatarRootRenderProps as RootRenderProps,
} from "./avatar.props";

export type {
  ImgProps,
  ImgRenderProps,
  RootProps,
  RootRenderProps,
};

export {
  Img,
  Root,
};

export const Avatar = Object.assign(Root, {
  Img,
});
