import { PhotosCardContainer } from "./photos-card-styles";


interface PhotoCardInterface {
    url: string;
}

export function PhotoCard({url}: PhotoCardInterface) {
    return (
        <PhotosCardContainer>
            <img src={url} />
        </PhotosCardContainer>
    )
}