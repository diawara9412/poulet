import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonicModule, LoadingController, Platform } from '@ionic/angular';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage'
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,]
})

export class UploadPage implements OnInit {
  image: any;
  imageSrc: string | undefined;
  moi :any
 
 
data : any={ nomProd: "moi",
description: "toi",
prix: "250"}

  constructor(private loadingCtrl: LoadingController ,private service : ApiserviceService,private plt: Platform,private actionSheetCtrl: ActionSheetController,   private firestore: Firestore,
    private storage: Storage,) { }
  public fileInput : any = File;
  // @ViewChild('fileInput', { static: false })
  // fileInput!: ElementRef;
  ngOnInit() {
  }
  chargephoto(files: any){
    this.fileInput = files
    console.log(this.fileInput)
      this.service.addProduitDeclarer(this.data,this.fileInput).subscribe((data)=>{
      if(data){
        console.log("bien");
        
      }
    })
  }
  async takePicture(source: CameraSource) {
    this.image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source 
      
    });
    
    // console.log(image);
    
    // this.imageSrc = "data:image/png;base64,"+this.image.base64String;
    this.imageSrc = this.image.dataUrl;
    console.log(this.imageSrc);
    const blob = this.dataURLtoBlob(this.image.dataUrl);
      const url = await this.uploadImage(blob, this.image.format);
      console.log(url);
      const response = await this.addDocument('test', { imageUrl: url });
      console.log(response);
   
  }
  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }
  ajouter(){
     const blobData = this.b64toBlob(this.image.base64String, `image/${this.image.format}`);
    const imageName = 'Give me a name';
    this.service.uploadImage(this.data,blobData, imageName, this.image.format).subscribe((data)=>{
      if(data){
       
        console.log("bien");
      
      }
    })
  }
  async uploadImage(blob: any, format: any) {
    try {
      const currentDate = Date.now();
      const filePath = `test/${currentDate}.${format}`;
      const fileRef = ref(this.storage, filePath);
      const task = await uploadBytes(fileRef, blob);
      console.log('task: ', task);
      const url = getDownloadURL(fileRef);
      console.log(url)
      return url;
    } catch(e) {
      throw(e);
    }    
  }

  addDocument(path: any, data: any) {
    const dataRef = collection(this.firestore, path);
    return addDoc(dataRef, data);
  }

  b64toBlob(b64Data: any, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  async selectImageSource() {
    const buttons = [
      {
        text: 'Prendre une image',
        icon: 'camera',
        handler: () => {
          this.takePicture(CameraSource.Camera);
        }
      },
      {
        text: 'Choisir une image',
        icon: 'image',
        handler: () => {
          this.takePicture(CameraSource.Photos);
        }
      }
    ];

    // Only allow file selection inside a browser
    // if (!this.plt.is('hybrid')) {
    //   buttons.push({
    //     text: 'Choose a File',
    //     icon: 'attach',
    //     handler: () => {
    //       this.fileInput.nativeElement.click();
    //     }
    //   });
    // }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }

}
