import {StyleSheet, View, Text,Image,ScrollView} from 'react-native';
import React, {Component} from 'react';
import { IndicatorViewPager,  PagerDotIndicator} from 'rn-viewpager';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar,faStarHalf } from '@fortawesome/free-solid-svg-icons';

export default class Profile extends Component {
 state = {
    fontLoaded: false,
  }
  async  componentWillMount() {
    this.setState({ fontLoaded: true });
  }
    render() {
      if(!this.state.fontLoaded){
        return(<View></View>);
      }
        return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image  source={require('../assets/Back.png')}/>
            <Text style={styles.header_title}>Minder Profile</Text>
        </View>
        <ScrollView style={{flex:1,backgroundColor:"#F3F3F3"}}>
            <View>
                <IndicatorViewPager
                    style={{height:300}}
                    indicator={this._renderDotIndicator()}
                >
                    <View>
                        <Image style={{width:'100%'}} source={require('../assets/profileimg.png')}/>
                    </View>
                    <View>
                        <Image style={{width:'100%'}} source={require('../assets/profileimg.png')}/>
                    </View>
                    <View>
                        <Image style={{width:'100%'}} source={require('../assets/profileimg.png')}/>
                    </View>
                </IndicatorViewPager>
            </View>
                        <View style={{alignItems:"center"}}>
                           <View style={styles.bodycard}>
                               <View style={styles.markFav}>
                                  <Image style={{width:'100%'}}  source={require('../assets/mark-favorite.png')}/>
                               </View>
                               <Text style={styles.heading}>Samantha J.</Text>
                               <View style={styles.twoTextCol}>
                                   <Text style={[styles.textSmall,{borderRightWidth:1,borderRightColor:"#DDD"}]}>Near Bondi Beach</Text>
                                   <Text  style={styles.textSmall}>100% Response Rate</Text>
                               </View>
                               <View style={styles.starWrap}>
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStarHalf} />
                               </View>
                               <View style={styles.afterStar}>
                                 <View style={styles.downSec}>
                                   <Text style={styles.numberText}>104</Text>
                                   <Text style={styles.afternum}>Job Completed</Text>
                                 </View>
                                  <View style={styles.downSec}>
                                   <Text style={styles.numberText}>26</Text>
                                   <Text style={styles.afternum}>Repeat Bookings</Text>
                                 </View>
                                 <View style={[styles.downSec,{borderRightWidth:0}]}>
                                      <Text style={[styles.numberText,{color:"red"}]}>1</Text>
                                     <Text style={styles.afternum}>Cancelled Jobs</Text>
                                 </View>
                               </View>
                           </View>

                             <View style={styles.card}>
                               <View style={styles.mainTitleWrap}>
                                 <Text style={styles.mainTitle}>About Samantha</Text>
                                 </View>
                                 <Text style={styles.mainPara}>Hi! I'm a career nanny with 10+ years of experience with children of all ages. For the past 8+ years, I've been taking care of newborn to toddler ages. I love babies and teaching them new words, colors, alphabets, reading, and singing to them. I also enjoy strolls to the park/beach. I'm very focused on childhood education, you can never start too young (reading)! I'm currently …</Text>
                                   <View style={[styles.readMore]}>
                                     <Text style={styles.readMoreText}>Read More</Text>
                                   </View>
                              </View>

                               <View style={styles.card}>
                               <View style={styles.mainTitleWrap}>
                                 <Text style={styles.mainTitle}>You Both Know</Text>
                                 </View>
                                 <View style={styles.matchWrap}>
                              <Image style={styles.imgMatch} source={require('../assets/userphoto.png')}/>
                              <Image style={styles.imgMatch} source={require('../assets/userphoto2.png')}/>
                              <Image style={styles.imgMatch} source={require('../assets/userphoto3.png')}/>
                                 </View>
                              </View>

                             <View style={styles.card}>
                               <View style={styles.mainTitleWrap}>
                                 <Text style={styles.mainTitle}>Certificates and Verifications</Text>
                                 </View>

                                    <View style={styles.iconWrap}>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/wwcc.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>WWCC</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/id-check.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>ID Check</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/first-aid.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>First Aid *</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/police-check.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>Police Check *</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/verified-email.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>Verified Email</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/verified-bank.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>Verified Bank</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/verified-phone.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>Verified Phone</Text>
                                      </View>
                                      <View style={styles.iconMain}>
                                          <Image style={styles.iconImg} source={require('../assets/verified-facebook.png')}/>
                                          <Image style={styles.checkImg} source={require('../assets/check.png')}/>

                                          <Text style={styles.iconText}>Verified Facebook</Text>
                                      </View>

                                    </View>
                                   <View style={[styles.note]}>
                                     <Text style={styles.noteText}>*Available upon request</Text>
                                   </View>
                              </View>




                             <View style={styles.card}>
                               <View style={styles.mainTitleWrap}>
                                 <Text style={styles.mainTitle}>Reviews</Text>
                                 </View>

                                    <View style={styles.reviewWrap}>
                                      <View style={styles.reviewImage}>
                                        <Image  source={require('../assets/reviewpic.png')}/>
                                      </View>
                                      <View style={styles.reviewContent}>
                                        <View style={{flexDirection:"row"}}>
                                          <Text style={{flex:1,fontSize:16,fontWeight:"600",fontFamily: "cabin-semibold"}}>Marie S.</Text>
                                          <Text style={{fontSize:14,color:'#8E8E8E'}}>2 days ago</Text>
                                        </View>

                                 <View style={styles.starWrap}>
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                               </View>
                                 <Text style={styles.reviewPara}>
                                     Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus!
                                   </Text>
                                      </View>
                                    </View>

                                                                        <View style={styles.reviewWrap}>
                                      <View style={styles.reviewImage}>
                                        <Image  source={require('../assets/reviewpic2.png')}/>
                                      </View>
                                      <View style={styles.reviewContent}>
                                        <View style={{flexDirection:"row"}}>
                                          <Text style={{flex:1,fontSize:16,fontWeight:"600"}}>Casey J.</Text>
                                          <Text style={{fontSize:11,color:'#8E8E8E'}}>2 days ago</Text>
                                        </View>

                                 <View style={styles.starWrap}>
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                                     <FontAwesomeIcon style={styles.iconStar} icon={faStar} />
                               </View>
                                 <Text style={styles.reviewPara}>
                                     Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus!
                                   </Text>
                                      </View>
                                    </View>


                                   <View style={[styles.readAll]}>
                                     <Text style={styles.readMoreText}>Read All</Text>
                                   </View>

                              </View>
                        </View>
                    </ScrollView>
    </View>

        );
    }


    _renderDotIndicator() {
        return <PagerDotIndicator  
                    dotStyle={{width:8,height:8,margin:4,borderRadius:8}}
                    selectedDotStyle={{width:8,margin:4,height:8,borderRadius:8,backgroundColor:"#9B3FD9"}}
                     style={{bottom:80}}
                      pageCount={3} />;
    }
    
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column"
  },
  header:{
      backgroundColor:"#FFF",
      padding:10,    
      paddingBottom:20,    
      paddingTop:20,    
      marginTop:20,
        flexDirection:"row"
  },
  header_title:{
      flex:1,
      fontSize:20,
      fontWeight:"600",
      paddingLeft:20
  },

  bodycard:{
      width:"90%",
      borderRadius:15,
      padding:15,

      backgroundColor:"#FFF",
      position:'relative',
       marginTop:-70,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 50 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        textAlign:"center",
        alignItems:"center"
    },
    heading:{
        fontSize:25,
        fontFamily: "cabin-semibold",
        fontWeight:'600'

    },
    twoTextCol:{
        flexDirection:"row"
    },
    textSmall:{
      fontFamily: "cabin-regular",
        color:"#484549",
        fontSize:11,
        margin:8
    },
    starWrap:{
      flexDirection:"row",
      marginTop:10,
    },
    iconStar:{
      color:"#31CB94",
      fontFamily: "cabin-regular",
      fontSize:40,
      margin:2
    },
    afterStar:{
      flexDirection:"row",
      marginTop:20,
      borderTopWidth:1,
      borderTopColor:"#DDD",
      paddingTop:20
    },
    downSec:{
      padding:10,
      alignItems:"center",
      flex:1,
      borderRightWidth:1,
      borderRightColor:"#DDD"


    },
    numberText:{
      fontWeight:"800",
      marginBottom:5
    },
    afternum:{
      fontFamily: "cabin-medium",
      textAlign:"center",
      fontWeight:"300",
      color:"#8E8E8E",
      fontSize:14
    },
    card:{
      backgroundColor:"#FFF",
      marginTop:20,
      padding:15,
      width:"100%"
    },
    mainTitleWrap:{
      borderBottomWidth:1,
      borderBottomColor:"#DDD",
      marginBottom:20
    },
    mainTitle:{
      fontFamily: "cabin-semibold",
      fontSize:21,
      fontWeight:"800",
      color:"#484549",
      textAlign:"center",
      paddingTop:20,
      paddingBottom:20,
    },
    mainPara:{
      color:"#484549",
      fontSize:16,
      flex:1
    },
    readMore:{
       borderTopWidth:1,
      borderTopColor:"#DDD",
      paddingTop:20,
      marginTop:20
    },
    readAll:{
      marginTop:10
    },
    readMoreText:{
      fontSize:16,
      fontFamily: "cabin-medium",
      textAlign:"center"
    },
    markFav:{
      position:"absolute",
      top:-20,
      right:20,
      width:60,
      height:60
    },
    matchWrap:{
      flexDirection:"row",
      justifyContent:"center",
    },
    imgMatch:{
      marginLeft:-5,
      marginRight:-5
    },
    reviewWrap:{
      flexDirection:"row",
        borderBottomWidth:1,
      borderBottomColor:"#DDD",
      paddingBottom:20,
      marginBottom:20
    },
    reviewImage:{
      marginRight:20
    },
    reviewContent:{
      flex:1
    },
    reviewPara:{
      fontSize:16,
      marginTop:10,
      color:"#484549",
      fontWeight:"600",
      fontFamily: "cabin-regular",
    },
    iconWrap:{
      flexDirection:"row",
      flexWrap:"wrap"
    },
    iconMain:{
      alignItems:"center",

      width:"25%",
      padding:10,
      position:"relative",
    },
    checkImg:{
      position:"absolute",
      right:10,
      top:50,
      width:20,
      height:20
    },
    iconImg:{
      width: 70,
      height: 70,
      marginBottom:10
    },
    iconText:{
      fontFamily: "cabin-regular",
      textAlign:"center",
      fontWeight:"400"
    },
    note:{
      paddingTop:20,
      borderTopWidth:1,
      borderTopColor:"#DDD"
    },
    noteText:{
      fontFamily: "cabin-regular",
      fontSize:14,
      color:"#8E8E8E"
    }

});
