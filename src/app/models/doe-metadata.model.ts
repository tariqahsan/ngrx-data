export interface DoeMetadata {
    doeId: string;
    authors: Blob;
    governmentContactEmail: string;
    governmentContactLastName: string;
    governmentContactPhone: string;
    performingOrgName: Blob;
    submitterEmailAddress: string;
    submitterLastName: string;
    submitterPhone: string;
    webPublicationDate: Date;
    distributionAvailability: string;
    documentSubTypeDesc: Blob;
    documentTypeDesc: Blob;
    fundingOrgName: Blob;
    doi: string;
    title: string;
    journalTitle: string
}
