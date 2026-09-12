define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "name": "CardContentWrapper",
    "values": {
      "padding": {
        "left": "small",
        "right": "small",
        "top": "none",
        "bottom": "none"
      },
      "visible": true,
      "color": "transparent",
      "borderRadius": "none",
      "alignItems": "stretch"
    }
  },
  {
    "operation": "merge",
    "name": "SideAreaProfileContainer",
    "values": {
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "visible": true,
      "alignItems": "stretch"
    }
  },
  {
    "operation": "merge",
    "name": "Tabs",
    "values": {
      "styleType": "default",
      "mode": "tab",
      "bodyBackgroundColor": "primary-contrast-500",
      "selectedTabTitleColor": "auto",
      "tabTitleColor": "auto",
      "underlineSelectedTabColor": "auto",
      "headerBackgroundColor": "auto",
      "allowToggleClose": true
    }
  },
  {
    "operation": "remove",
    "name": "GeneralInfoTabContainer"
  },
  {
    "operation": "merge",
    "name": "CardToggleTabPanel",
    "values": {
      "styleType": "default",
      "bodyBackgroundColor": "primary-contrast-500",
      "selectedTabTitleColor": "auto",
      "tabTitleColor": "auto",
      "underlineSelectedTabColor": "auto",
      "headerBackgroundColor": "auto",
      "allowToggleClose": true
    }
  },
  {
    "operation": "merge",
    "name": "Feed",
    "values": {
      "dataSourceName": "PDS",
      "entitySchemaName": "UsrYacht"
    }
  },
  {
    "operation": "merge",
    "name": "AttachmentList",
    "values": {
      "columns": [
        {
          "id": "66350fcd-a9b5-42f3-8747-8b5061555ea7",
          "code": "AttachmentListDS_Name",
          "caption": "#ResourceString(AttachmentListDS_Name)#",
          "dataValueType": 28,
          "width": 200
        }
      ]
    }
  },
  {
    "operation": "insert",
    "name": "Button_zroppsx",
    "values": {
      "type": "crt.Button",
      "caption": "#ResourceString(Button_zroppsx_caption)#",
      "color": "default",
      "disabled": false,
      "size": "large",
      "iconPosition": "left-icon",
      "visible": true,
      "icon": "actions-button-icon",
      "menuItems": [],
      "clickMode": "menu"
    },
    "parentName": "ActionButtonsContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "MenuItem_n50eqg3",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(MenuItem_n50eqg3_caption_v2)#",
      "visible": true,
      "icon": "calculator-button-icon",
      "clicked": {
        "request": "crt.RunBusinessProcessRequest",
        "params": {
          "processName": "UsrYachtAvgTickPrice",
          "processRunType": "ForTheSelectedPage",
          "saveAtProcessStart": true,
          "showNotification": true,
          "notificationText": "#ResourceString(MenuItem_n50eqg3_clicked_params_notificationText)#",
          "recordIdProcessParameterName": "YachtId"
        }
      }
    },
    "parentName": "Button_zroppsx",
    "propertyName": "menuItems",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "MenuItem_YachtService",
    "values": {
      "type": "crt.MenuItem",
      "caption": "#ResourceString(MenuItem_YachtService_caption_v2)#",
      "visible": true,
      "icon": "rocket-icon",
      "clicked": {
        "request": "usr.RunWebServiceRequest"
      }
    },
    "parentName": "Button_zroppsx",
    "propertyName": "menuItems",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "UsrName",
    "values": {
      "layoutConfig": {},
      "type": "crt.Input",
      "label": "$Resources.Strings.UsrName",
      "control": "$UsrName",
      "labelPosition": "auto"
    },
    "parentName": "YachtProfileFieldsContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "NumberInput_Price",
    "values": {
      "layoutConfig": {},
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrPrice_mmuou1d",
      "control": "$PDS_UsrPrice_mmuou1d",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "auto",
      "tooltip": "$Resources.Strings.PDS_UsrPrice_mmuou1d_tooltip"
    },
    "parentName": "YachtProfileFieldsContainer",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "ImageInput_Image",
    "values": {
      "layoutConfig": {},
      "type": "crt.ImageInput",
      "label": "$Resources.Strings.PDS_UsrImage_a8cipbb",
      "value": "$PDS_UsrImage_a8cipbb",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "auto",
      "size": "large",
      "borderRadius": "medium",
      "positioning": "cover",
      "tooltip": "Photo of the yacht. A wide, landscape image works best."
    },
    "parentName": "YachtProfileFieldsContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "YachtNumber",
    "values": {
      "layoutConfig": {},
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrYachtNumber_t2u9vj1",
      "control": "$PDS_UsrYachtNumber_t2u9vj1",
      "placeholder": "",
      "tooltip": "$Resources.Strings.PDS_UsrYachtNumber_t2u9vj1_tooltip",
      "readonly": true,
      "multiline": false,
      "labelPosition": "auto",
      "visible": true
    },
    "parentName": "YachtProfileFieldsContainer",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "TipcketPrice",
    "values": {
      "layoutConfig": {},
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrTicketPrice_kfnvn9n",
      "control": "$PDS_UsrTicketPrice_kfnvn9n",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "auto",
      "tooltip": "",
      "visible": false
    },
    "parentName": "YachtProfileFieldsContainer",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "NumberInput_Length",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrLength_kg5k836",
      "control": "$PDS_UsrLength_kg5k836",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "auto",
      "tooltip": "$Resources.Strings.PDS_UsrLength_kg5k836_tooltip"
    },
    "parentName": "YachtSpecsFieldsContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "ComboBox_Captain",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrCaptain_7vsby6s",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "auto",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrCaptain_7vsby6s",
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "valueDetails": null
    },
    "parentName": "YachtCrewFieldsContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "addRecord_mwvrpah",
    "values": {
      "code": "addRecord",
      "type": "crt.ComboboxSearchTextAction",
      "icon": "combobox-add-new",
      "caption": "#ResourceString(addRecord_mwvrpah_caption)#",
      "clicked": {
        "request": "crt.CreateRecordFromLookupRequest",
        "params": {}
      }
    },
    "parentName": "ComboBox_Captain",
    "propertyName": "listActions",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "NumberInput_PassengerCount",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrPassengerCount_l8povhd",
      "control": "$PDS_UsrPassengerCount_l8povhd",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "auto",
      "tooltip": "$Resources.Strings.PDS_UsrPassengerCount_l8povhd_tooltip"
    },
    "parentName": "YachtSpecsFieldsContainer",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "CaptainEmail",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.EmailInput",
      "label": "$Resources.Strings.PDS_UsrCaptainEmail_37ejs1s",
      "control": "$PDS_UsrCaptainEmail_37ejs1s",
      "labelPosition": "auto",
      "placeholder": "",
      "tooltip": "$Resources.Strings.PDS_UsrCaptainEmail_37ejs1s_tooltip",
      "needHandleSave": false,
      "readonly": true
    },
    "parentName": "YachtCrewFieldsContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "CrewCcount",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.NumberInput",
      "label": "$Resources.Strings.PDS_UsrCrewCount_kalxrpp",
      "control": "$PDS_UsrCrewCount_kalxrpp",
      "readonly": false,
      "placeholder": "",
      "labelPosition": "auto",
      "tooltip": "$Resources.Strings.PDS_UsrCrewCount_kalxrpp_tooltip"
    },
    "parentName": "YachtSpecsFieldsContainer",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_Manager",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 1,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrManager_vwv51o7",
      "ariaLabel": "",
      "isAddAllowed": true,
      "showValueAsLink": true,
      "labelPosition": "auto",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrManager_vwv51o7",
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "valueDetails": null
    },
    "parentName": "YachtCrewFieldsContainer",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "ComboBox_Status",
    "values": {
      "layoutConfig": {},
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrStatus_zqh3a4r",
      "ariaLabel": "",
      "isAddAllowed": false,
      "showValueAsLink": false,
      "labelPosition": "auto",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrStatus_zqh3a4r",
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "valueDetails": "$ComboBox_s14lv3i_ValueDetails"
    },
    "parentName": "YachtProfileFieldsContainer",
    "propertyName": "items",
    "index": 3
  },
  {
    "operation": "insert",
    "name": "ComboBox_DriveType",
    "values": {
      "layoutConfig": {
        "column": 2,
        "colSpan": 1,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.ComboBox",
      "label": "$Resources.Strings.PDS_UsrDriveType_24nzgnm",
      "ariaLabel": "",
      "isAddAllowed": false,
      "showValueAsLink": false,
      "labelPosition": "auto",
      "controlActions": [],
      "listActions": [],
      "tooltip": "",
      "control": "$PDS_UsrDriveType_24nzgnm",
      "visible": true,
      "readonly": false,
      "placeholder": "",
      "valueDetails": null,
      "secondaryDisplayValue": "Description"
    },
    "parentName": "YachtSpecsFieldsContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "Input_Comment",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 2,
        "rowSpan": 1
      },
      "type": "crt.Input",
      "label": "$Resources.Strings.PDS_UsrComment_7ty1zgu",
      "control": "$PDS_UsrComment_7ty1zgu",
      "placeholder": "$Resources.Strings.PDS_UsrComment_7ty1zgu_placeholder",
      "tooltip": "",
      "readonly": false,
      "multiline": true,
      "labelPosition": "auto",
      "visible": true
    },
    "parentName": "YachtDetailsFieldsContainer",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "YachtCategories",
    "values": {
      "layoutConfig": {
        "column": 1,
        "colSpan": 2,
        "row": 1,
        "rowSpan": 1
      },
      "type": "crt.MultiSelect",
      "label": "#ResourceString(YachtCategories_label)#",
      "recordId": "$Id",
      "recordRelationColumnName": "UsrYacht",
      "selectSchemaName": "UsrCategoryInYacht",
      "selectColumnName": "UsrCategory",
      "visible": true,
      "labelPosition": "auto",
      "placeholder": "",
      "tooltip": "",
      "required": false
    },
    "parentName": "YachtDetailsFieldsContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "YachtProfileFieldsContainer",
    "values": {
      "type": "crt.FlexContainer",
      "direction": "column",
      "fitContent": true,
      "visible": true,
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "justifyContent": "start",
      "alignItems": "stretch",
      "gap": "none",
      "wrap": "nowrap",
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      }
    },
    "parentName": "SideAreaProfileContainer",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "YachtSpecsExpansionPanel",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(YachtSpecsExpansionPanel_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "#0D2E4E",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "visible": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": []
    },
    "parentName": "GeneralInfoTab",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "YachtCrewExpansionPanel",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(YachtCrewExpansionPanel_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "#0D2E4E",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "visible": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": []
    },
    "parentName": "GeneralInfoTab",
    "propertyName": "items",
    "index": 1
  },
  {
    "operation": "insert",
    "name": "YachtDetailsExpansionPanel",
    "values": {
      "type": "crt.ExpansionPanel",
      "title": "#ResourceString(YachtDetailsExpansionPanel_title)#",
      "toggleType": "default",
      "togglePosition": "before",
      "expanded": true,
      "labelColor": "#0D2E4E",
      "fullWidthHeader": false,
      "titleWidth": 20,
      "visible": true,
      "padding": {
        "top": "small",
        "bottom": "small",
        "left": "none",
        "right": "none"
      },
      "items": [],
      "tools": []
    },
    "parentName": "GeneralInfoTab",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "YachtSpecsFieldsContainer",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(32px, max-content)",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "visible": true,
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      }
    },
    "parentName": "YachtSpecsExpansionPanel",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "YachtCrewFieldsContainer",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(32px, max-content)",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "visible": true,
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      }
    },
    "parentName": "YachtCrewExpansionPanel",
    "propertyName": "items",
    "index": 0
  },
  {
    "operation": "insert",
    "name": "YachtDetailsFieldsContainer",
    "values": {
      "type": "crt.GridContainer",
      "rows": "minmax(32px, max-content)",
      "columns": [
        "minmax(64px, 1fr)",
        "minmax(64px, 1fr)"
      ],
      "gap": {
        "columnGap": "large",
        "rowGap": "none"
      },
      "visible": true,
      "color": "transparent",
      "borderRadius": "none",
      "padding": {
        "top": "none",
        "right": "none",
        "bottom": "none",
        "left": "none"
      },
      "items": [],
      "layoutConfig": {
        "column": 1,
        "row": 1,
        "colSpan": 1,
        "rowSpan": 1
      }
    },
    "parentName": "YachtDetailsExpansionPanel",
    "propertyName": "items",
    "index": 0
  }
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [
      "attributes"
    ],
    "values": {
      "UsrName": {
        "modelConfig": {
          "path": "PDS.UsrName"
        }
      },
      "PDS_UsrLength_kg5k836": {
        "modelConfig": {
          "path": "PDS.UsrLength"
        },
        "validators": {
          "MySuperValidator": {
            "type": "usr.YTValidator",
            "params": {
              "settingCode": "UsrYachtMinLength",
              "message": "#ResourceString(LengthCannotBeLess)#"
            }
          }
        }
      },
      "PDS_UsrPrice_mmuou1d": {
        "modelConfig": {
          "path": "PDS.UsrPrice"
        },
        "validators": {
          "MySuperValidator": {
            "type": "usr.YTValidator",
            "params": {
              "settingCode": "UsrYachtMinPrice",
              "message": "#ResourceString(PriceCannotBeLess)#"
            }
          }
        }
      },
      "PDS_UsrCaptain_7vsby6s": {
        "modelConfig": {
          "path": "PDS.UsrCaptain"
        }
      },
      "PDS_UsrCaptain_7vsby6s_List": {
        "isCollection": true,
        "modelConfig": {
          "sortingConfig": {
            "default": [
              {
                "columnName": "Name",
                "direction": "asc"
              }
            ]
          }
        }
      },
      "PDS_UsrImage_a8cipbb": {
        "modelConfig": {
          "path": "PDS.UsrImage"
        }
      },
      "PDS_UsrPassengerCount_l8povhd": {
        "modelConfig": {
          "path": "PDS.UsrPassengerCount"
        }
      },
      "PDS_UsrDriveType_24nzgnm": {
        "modelConfig": {
          "path": "PDS.UsrDriveType"
        }
      },
      "PDS_UsrDriveType_24nzgnm_List": {
        "isCollection": true,
        "modelConfig": {
          "sortingConfig": {
            "default": [
              {
                "columnName": "Name",
                "direction": "asc"
              }
            ]
          }
        }
      },
      "PDS_UsrStatus_zqh3a4r": {
        "modelConfig": {
          "path": "PDS.UsrStatus"
        }
      },
      "PDS_UsrStatus_zqh3a4r_List": {
        "isCollection": true,
        "modelConfig": {
          "sortingConfig": {
            "default": [
              {
                "columnName": "Name",
                "direction": "asc"
              }
            ]
          }
        }
      },
      "ComboBox_s14lv3i_ValueDetails": {
        "modelConfig": {
          "path": "PDS.UsrStatusDescription"
        }
      },
      "PDS_UsrManager_vwv51o7": {
        "modelConfig": {
          "path": "PDS.UsrManager"
        }
      },
      "PDS_UsrManager_vwv51o7_List": {
        "isCollection": true,
        "modelConfig": {
          "sortingConfig": {
            "default": [
              {
                "columnName": "Name",
                "direction": "asc"
              }
            ]
          }
        }
      },
      "PDS_UsrComment_7ty1zgu": {
        "modelConfig": {
          "path": "PDS.UsrComment"
        }
      },
      "PDS_UsrCrewCount_kalxrpp": {
        "modelConfig": {
          "path": "PDS.UsrCrewCount"
        }
      },
      "PDS_UsrYachtNumber_t2u9vj1": {
        "modelConfig": {
          "path": "PDS.UsrYachtNumber"
        }
      },
      "YachtCategories_List_Items_Predefined_Filter": {
        "value": null
      },
      "PDS_UsrTicketPrice_kfnvn9n": {
        "modelConfig": {
          "path": "PDS.UsrTicketPrice"
        }
      },
      "PDS_UsrCaptainEmail_37ejs1s": {
        "modelConfig": {
          "path": "PDS.UsrCaptainEmail_37ejs1s"
        }
      }
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes",
      "Id",
      "modelConfig"
    ],
    "values": {
      "path": "PDS.Id"
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes"
    ],
    "values": {
      "UsrName": {
        "modelConfig": {
          "path": "PDS.UsrName"
        }
      },
      "PDS_UsrImage_a8cipbb": {
        "modelConfig": {
          "path": "PDS.UsrImage"
        }
      },
      "PDS_UsrYachtNumber_t2u9vj1": {
        "modelConfig": {
          "path": "PDS.UsrYachtNumber"
        }
      },
      "PDS_UsrStatus_zqh3a4r": {
        "modelConfig": {
          "path": "PDS.UsrStatus"
        }
      },
      "ComboBox_s14lv3i_ValueDetails": {
        "modelConfig": {
          "path": "PDS.UsrStatusDescription"
        }
      },
      "PDS_UsrPrice_mmuou1d": {
        "modelConfig": {
          "path": "PDS.UsrPrice"
        },
        "validators": {
          "MySuperValidator": {
            "type": "usr.YTValidator",
            "params": {
              "settingCode": "UsrYachtMinPrice",
              "message": "#ResourceString(PriceCannotBeLess)#"
            }
          }
        }
      },
      "PDS_UsrTicketPrice_kfnvn9n": {
        "modelConfig": {
          "path": "PDS.UsrTicketPrice"
        }
      },
      "PDS_UsrLength_kg5k836": {
        "modelConfig": {
          "path": "PDS.UsrLength"
        },
        "validators": {
          "MySuperValidator": {
            "type": "usr.YTValidator",
            "params": {
              "settingCode": "UsrYachtMinLength",
              "message": "#ResourceString(LengthCannotBeLess)#"
            }
          }
        }
      },
      "PDS_UsrDriveType_24nzgnm": {
        "modelConfig": {
          "path": "PDS.UsrDriveType"
        }
      },
      "PDS_UsrPassengerCount_l8povhd": {
        "modelConfig": {
          "path": "PDS.UsrPassengerCount"
        }
      },
      "PDS_UsrCrewCount_kalxrpp": {
        "modelConfig": {
          "path": "PDS.UsrCrewCount"
        }
      },
      "PDS_UsrCaptain_7vsby6s": {
        "modelConfig": {
          "path": "PDS.UsrCaptain"
        }
      },
      "PDS_UsrCaptainEmail_37ejs1s": {
        "modelConfig": {
          "path": "PDS.UsrCaptainEmail_37ejs1s"
        }
      },
      "PDS_UsrManager_vwv51o7": {
        "modelConfig": {
          "path": "PDS.UsrManager"
        }
      },
      "PDS_UsrComment_7ty1zgu": {
        "modelConfig": {
          "path": "PDS.UsrComment"
        }
      }
    }
  }
]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
  {
    "operation": "merge",
    "path": [],
    "values": {
      "primaryDataSourceName": "PDS"
    }
  },
  {
    "operation": "merge",
    "path": [
      "dataSources"
    ],
    "values": {
      "PDS": {
        "type": "crt.EntityDataSource",
        "config": {
          "entitySchemaName": "UsrYacht",
          "attributes": {
            "UsrStatusDescription": {
              "path": "UsrStatus.Description",
              "type": "ForwardReference"
            },
            "UsrCaptainEmail_37ejs1s": {
              "path": "UsrCaptain.Email",
              "type": "ForwardReference"
            }
          }
        },
        "scope": "page"
      }
    }
  }
]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");
					
					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType_24nzgnm;
					var driveTypeId = "";
					if (typeObject) {
						driveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetMaxPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://y-todosan-nb.tscrm.com:40003/0/rest/YachtService/GetMaxPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: driveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{		
			"usr.YTValidator": {
				validator: function (config) {
					return async function (control) {
						let value = control.value;
						let setting = await new sdk.SysSettingsService().getByCode(config.settingCode);
						let minValue = setting.value;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.YTValidator": {
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "settingCode"
					},
					{
						name: "message"
					}
				],
				async: true
			}
		}/**SCHEMA_VALIDATORS*/
	};
});