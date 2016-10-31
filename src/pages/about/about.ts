import { Component } from '@angular/core';

import { NavController,ActionSheetController ,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl:ActionSheetController,
    public  alertCtrl:AlertController
  ) {

  }
  sheet(){
    let sheet=this.actionSheetCtrl.create({
      title:"操作表",
      buttons:[{
        text:"头部",
        handler:()=>{
          console.log("this is head")
        }
      },{
        text:"consoplay",
        role:'destructive'
      },{
        text:"取消",
        role:"cancel"
      }]
    })
    sheet.present()
  }
  alert(){
    let alert=this.alertCtrl.create({
      title:"弹窗",
      subTitle:"关闭弹窗",
      buttons:["好的"]
    })
    alert.present()
  }

}
