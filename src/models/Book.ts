export type Book = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        industryIdentifiers: {
            type: string;
            identifier: string;
        }[],
        readingModes: {
            text: boolean;
            image: boolean;
        },
        pageCount: number;
        printType: string;
        categories: string[];
        averageRating: number | undefined;
        ratingsCount: number | undefined;
        maturityRating: string;
        allowAnonLogging: boolean;
        contentVersion: string;
        panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
        },
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        },
        language: string;
        previewLink: string;
        infoLink: string;
        canonicalVolumeLink: string;
    },
    saleInfo: {
        country: string;
        saleability: string;
        isEbook: boolean;
        listPrice?: {
            amount: number;
            currencyCode: string;
        };
        retailPrice?: {
            amount: 75;
            currencyCode: string;
        };
        buyLink?: string;
        offers?: {
            finskyOfferType: number;
            listPrice: {
                amountInMicros: number;
                currencyCode: string;
            };
            retailPrice: {
                amountInMicros: number;
                currencyCode: string;
            };
        }[];
    },
    accessInfo: {
        country: string;
        viewability: string;
        embeddable: boolean;
        publicDomain: boolean;
        textToSpeechPermission: string;
        epub: {
            isAvailable: boolean;
            acsTokenLink: string | undefined;
        },
        pdf: {
            isAvailable: boolean;
            acsTokenLink: string | undefined;
        },
        webReaderLink: string;
        accessViewStatus: string;
        quoteSharingAllowed: boolean;
    },
    searchInfo: {
        textSnippet: string;
    }
};