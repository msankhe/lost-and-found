interface IPartialContextProvider {
    root: string,
    baseUrl: string,
    apiKey: string
}

interface IContextProvider extends IPartialContextProvider {

}

interface IHandedOverCard {
    CardType: string,
    CardNumber: string
}
interface ILostAndFoundItem {
    _id: string
    Name: string
    Phone: string
    Email: string
    Title: string
    Description: string
    Features: string[]
    ImageUrl: string
    LastLocation: string
    Status: string
    Created: string
    PoliceStationID?:string
    LockerID?:string
    Data?: string
    FoundLocation?: string
    Location?: string
    AdditionalDetails?: {
        BusNumber?: string,
        BagID?: string
        ItemType?: "normal" | "valuable" | "suspicious"
    }
    claimed?: string[]
    HandedOverEmail?: string
    HandedOverTime?: string
    HandedOverToImageUrl?:string
    HandedOverCardDetails: IHandedOverCard[]
}


interface IUserLocationData {
    lat: string,
    long: string,
    name: string
}

interface IColor {
    hex: string,
    color: string
}

interface UploadResponse{
    ImageUrl: string
    Features: {
        colors: IColor[],
        labels: string[]
    }
}
