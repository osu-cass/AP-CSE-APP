import { IImageResult } from '../../models/image/image';

const {API_ENDPOINT} = process.env;

export interface IImageClient {
    getImage: (params: IImageParams) => Promise<IImageResult>;
}

export interface IImageParams {
    url: string;
}

export class ImageClient implements IImageClient {
    private endpoint: string;

    constructor() {
        this.endpoint = API_ENDPOINT || 'http://localhost:3000';
    }

    public async getImage(params: IImageParams): Promise<IImageResult> {
        const requestUrl = `${this.endpoint}/api/image?url=${params.url}`;
        console.log(requestUrl);
        let imageResult: IImageResult;

        try {
            const response = await window.fetch(requestUrl);
            imageResult = <IImageResult> await response.json();
        } catch (err) {
            throw new Error('Failed to fetch image.');
        }

        console.log(imageResult);

        return imageResult;
    }
}

