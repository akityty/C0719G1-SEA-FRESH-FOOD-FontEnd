import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product/product-service.service';
import {Product} from '../../interface/product/product';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  createProductForm: FormGroup;
  check = '';
  uploadTask: firebase.storage.UploadTask;
  basePath = '/uploads';

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private fb: FormBuilder, private productService: ProductServiceService, private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.createProductForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      origin: ['', Validators.required],
    });
  }

  onSubmit() {
  }

  uploadFile(event) {
    const file = event.target.files;
    console.log(file);
    const metadata = {
      contentType: 'image/jpeg',
    };
    // const storageRef = firebase.storage().ref();
    // console.log(file[0]);
    // this.uploadTask = storageRef.child('images/' + file.name).put(file[0]);
    // this.db.list(`${this.basePath}/`).push(file);
    // console.log(this.uploadTask.snapshot.downloadURL);
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${file.name}`).put(file[0]);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      },
      (error) => {
        console.log(error);
      },
      () => {

        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  TransferFormDataToUser() {
    this.product = {
      name: this.createProductForm.get('name').value,
      category: {id: 1, name: 'thit'},
      amount: this.createProductForm.get('amount').value,
      picture: [],
      description: this.createProductForm.get('description').value,
      price: this.createProductForm.get('price').value,
      origin: this.createProductForm.get('origin').value,
      provider: {id: 1, name: 'vinmart'},
      status: true,
    };
  }
}
