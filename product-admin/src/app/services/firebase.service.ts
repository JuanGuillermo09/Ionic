
import { Injectable, inject } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from "../models/user.model";

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { addDoc, collection, collectionData, deleteDoc, doc, getDoc, getFirestore, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { UtilsService } from "./utils.service";

import { deleteObject, getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  auth = inject(AngularFireAuth);
  stotage = inject(AngularFireStorage);
  fireStore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);


  //=================== Autenticacion =========

  getAuth() {
    return getAuth();
  }

  //=====Acceder=====
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //=====Crear Usuario=====

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //=====Actualizacion=====

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }


  //============Enviar email para restablcer contraseña=======

  sendRecoveryEmail(email: string) {

    return sendPasswordResetEmail(getAuth(), email)
  }


  //============= Cerrar sesion ============
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth');
  }

  //==============================Base De Datos====================

  //======== Obtener documentos de una coleccion ======

  getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, ...collectionQuery), { idField: 'id' });
  }

  //===============Setear Un Docuento================

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //===============Actualizar Un Docuento================

  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  //===============Eliminar Un Docuento================

  deleteDocument(path: string) {
    return deleteDoc(doc(getFirestore(), path));
  }


  //===============Obtener Un Docuento================
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data()
  }


  //========== Agregar un documento ==========

  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  // ================= Almacenamiento ===========

  //========= subir Imagen ========

  async upLoadImagen(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
      return getDownloadURL(ref(getStorage(), path))
    })
  }

  //============== Obtener ruta de la imagen con su url ========

  async getFilePath(url: string) {
    return ref(getStorage(), url).fullPath
  }

  //====== Eliminar archivo ==========

  deleteFile(path: string) {
    return deleteObject(ref(getStorage(), path));
  }
}
