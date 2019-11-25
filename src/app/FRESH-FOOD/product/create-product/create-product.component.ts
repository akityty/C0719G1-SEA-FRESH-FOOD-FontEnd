import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product/product-service.service';
import {Product} from '../../interface/product/product';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {Picture} from '../../interface/product/picture';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  createProductForm: FormGroup;
  check = '';
  picture: Picture;
  arrayPicture = [];

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


  uploadFile(event) {
    const file = event.target.files;
    const metadata = {
      contentType: 'image/jpeg',
    };
    const uploadTask = firebase.storage().ref('img/' + Date.now()).put(file[0], metadata);
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
          this.picture = {name: downloadURL};
          this.arrayPicture.push(this.picture);
        });
      }
    );
  }

  transferFormDataToUser() {
    this.product = {
      name: this.createProductForm.get('name').value,
      category: {id: 1, name: 'thit'},
      amount: this.createProductForm.get('amount').value,
      picture: this.arrayPicture,
      description: this.createProductForm.get('description').value,
      price: this.createProductForm.get('price').value,
      origin: this.createProductForm.get('origin').value,
      provider: {id: 1, name: 'vinmart'},
      status: true,
    };
  }

  onSubmit() {
    this.transferFormDataToUser();
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe(next => {
        this.check = 'true';
      },
      error => {
        this.check = 'false';
      });
  }
}
