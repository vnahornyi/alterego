import { Paper, SxProps, Theme } from "@mui/material";

interface IImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  priority?: boolean;
  sx?: SxProps<Theme>;
}

const Image: React.FC<IImageProps> = ({
  src,
  width,
  height,
  alt,
  priority,
  sx,
}) => {
  return (
    <Paper
      component="img"
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      elevation={3}
      sx={sx}
    />
  );
};

export default Image;
