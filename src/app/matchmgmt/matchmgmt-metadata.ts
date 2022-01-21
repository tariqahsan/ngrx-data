import { EntityMetadataMap } from "@ngrx/data";
import { DoeMetadata } from "./doe-metadata.model";

export const MatchmgmtMetadata: EntityMetadataMap = {
    DoeMetadata:{
       selectId:(DoeMetadata:DoeMetadata) => DoeMetadata.doeId
    }
}