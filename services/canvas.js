import {
	registerNode
} from 'topology-core/middles'
import {
	flowData,
	flowDataAnchors,
	flowDataIconRect,
	flowDataTextRect,
	flowSubprocess,
	flowSubprocessIconRect,
	flowSubprocessTextRect,
	flowDb,
	flowDbIconRect,
	flowDbTextRect,
	flowDocument,
	flowDocumentAnchors,
	flowDocumentIconRect,
	flowDocumentTextRect,
	flowInternalStorage,
	flowInternalStorageIconRect,
	flowInternalStorageTextRect,
	flowExternStorage,
	flowExternStorageAnchors,
	flowExternStorageIconRect,
	flowExternStorageTextRect,
	flowQueue,
	flowQueueIconRect,
	flowQueueTextRect,
	flowManually,
	flowManuallyAnchors,
	flowManuallyIconRect,
	flowManuallyTextRect,
	flowDisplay,
	flowDisplayAnchors,
	flowDisplayIconRect,
	flowDisplayTextRect,
	flowParallel,
	flowParallelAnchors,
	flowComment,
	flowCommentAnchors
} from 'topology-flow-diagram'

import {
	activityFinal,
	activityFinalIconRect,
	activityFinalTextRect,
	swimlaneV,
	swimlaneVIconRect,
	swimlaneVTextRect,
	swimlaneH,
	swimlaneHIconRect,
	swimlaneHTextRect,
	fork,
	forkHAnchors,
	forkIconRect,
	forkTextRect,
	forkVAnchors
} from 'topology-activity-diagram'
import {
	simpleClass,
	simpleClassIconRect,
	simpleClassTextRect,
	interfaceClass,
	interfaceClassIconRect,
	interfaceClassTextRect
} from 'topology-class-diagram'
import {
	lifeline,
	lifelineAnchors,
	lifelineIconRect,
	lifelineTextRect,
	sequenceFocus,
	sequenceFocusAnchors,
	sequenceFocusIconRect,
	sequenceFocusTextRect
} from 'topology-sequence-diagram'
// echarts
import {
	register as registerChart
} from 'topology-chart-diagram'
import {
	loadJS
} from "topology-core/utils/dom";
export function canvasRegister() {
	registerNode(
		'draw',
		(ctx, node) => {},
	)
	registerNode(
		'flowData',
		flowData,
		flowDataAnchors,
		flowDataIconRect,
		flowDataTextRect
	)
	registerNode(
		'flowSubprocess',
		flowSubprocess,
		null,
		flowSubprocessIconRect,
		flowSubprocessTextRect
	)
	registerNode('flowDb', flowDb, null, flowDbIconRect, flowDbTextRect)
	registerNode(
		'flowDocument',
		flowDocument,
		flowDocumentAnchors,
		flowDocumentIconRect,
		flowDocumentTextRect
	)
	registerNode(
		'flowInternalStorage',
		flowInternalStorage,
		null,
		flowInternalStorageIconRect,
		flowInternalStorageTextRect
	)
	registerNode(
		'flowExternStorage',
		flowExternStorage,
		flowExternStorageAnchors,
		flowExternStorageIconRect,
		flowExternStorageTextRect
	)
	registerNode(
		'flowQueue',
		flowQueue,
		null,
		flowQueueIconRect,
		flowQueueTextRect
	)
	registerNode(
		'flowManually',
		flowManually,
		flowManuallyAnchors,
		flowManuallyIconRect,
		flowManuallyTextRect
	)
	registerNode(
		'flowDisplay',
		flowDisplay,
		flowDisplayAnchors,
		flowDisplayIconRect,
		flowDisplayTextRect
	)
	registerNode('flowParallel', flowParallel, flowParallelAnchors, null, null)
	registerNode('flowComment', flowComment, flowCommentAnchors, null, null)

	// activity
	registerNode(
		'activityFinal',
		activityFinal,
		null,
		activityFinalIconRect,
		activityFinalTextRect
	)
	registerNode(
		'swimlaneV',
		swimlaneV,
		null,
		swimlaneVIconRect,
		swimlaneVTextRect
	)
	registerNode(
		'swimlaneH',
		swimlaneH,
		null,
		swimlaneHIconRect,
		swimlaneHTextRect
	)
	registerNode('forkH', fork, forkHAnchors, forkIconRect, forkTextRect)
	registerNode('forkV', fork, forkVAnchors, forkIconRect, forkTextRect)

	// class
	registerNode(
		'simpleClass',
		simpleClass,
		null,
		simpleClassIconRect,
		simpleClassTextRect
	)
	registerNode(
		'interfaceClass',
		interfaceClass,
		null,
		interfaceClassIconRect,
		interfaceClassTextRect
	)

	// sequence
	registerNode(
		'lifeline',
		lifeline,
		lifelineAnchors,
		lifelineIconRect,
		lifelineTextRect
	)
	registerNode(
		'sequenceFocus',
		sequenceFocus,
		sequenceFocusAnchors,
		sequenceFocusIconRect,
		sequenceFocusTextRect
	)

	// echarts
	if (process.client) { // nuxt?????????????????????????????????echarts
		registerChart();
	}
}

export const Tools = [{
	group: '??????',
	children: [{
		name: '???????????????',
		icon: 'iconbijiben2',
		data: {
			text: '',
			rect: {
				width: 100,
				height: 100
			},
			paddingLeft: 0,
			paddingRight: 0,
			paddingTop: 0,
			paddingBottom: 0,
			name: 'draw',
			icon: '\ue70c',
			iconFamily: 'iconfont',
			iconColor: '#2f54eb'
		}
	}, {
		name: '???????????????',
		icon: 'icontaishiji1',
		data: {
			text: '',
			rect: {
				width: 100,
				height: 100
			},
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			name: 'draw',
			icon: '\ue679',
			iconFamily: 'iconfont',
			iconColor: '#2f54eb'
		}
	}, {
		name: '?????????',
		icon: 'iconfanghuoqiang',
		data: {
			text: '',
			rect: {
				width: 100,
				height: 100
			},
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			name: 'draw',
			icon: '\ue835',
			iconFamily: 'iconfont',
			iconColor: '#2f54eb'
		}
	}, {
		name: '?????????',
		icon: 'iconjiaohuanji',
		data: {
			text: '',
			rect: {
				width: 100,
				height: 100
			},
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			name: 'draw',
			icon: '\ue836',
			iconFamily: 'iconfont',
			iconColor: '#2f54eb'
		}
	}, {
		name: '???????????????',
		icon: 'iconhexinjiaohuanji',
		data: {
			text: '',
			rect: {
				width: 100,
				height: 100
			},
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			name: 'draw',
			icon: '\ue67a',
			iconFamily: 'iconfont',
			iconColor: '#2f54eb'
		}
	}, {
		name: '?????????',
		icon: 'iconfuwuqi1',
		data: {
			text: '',
			rect: {
				width: 100,
				height: 100
			},
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			name: 'draw',
			icon: '\ue607',
			iconFamily: 'iconfont',
			iconColor: '#2f54eb'
		}
	}],
}, {
	group: '????????????',
	children: [{
			name: '??????',
			icon: 'icon-rect',
			data: {
				text: '??????',
				rect: {
					width: 100,
					height: 100
				},
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				name: 'rectangle',
				// icon: '\ue64d',
				iconFamily: 'topology',
				iconColor: '#2f54eb'
			}
		}, {
			name: '????????????',
			icon: 'icon-rectangle',
			data: {
				text: '????????????',
				rect: {
					width: 200,
					height: 50
				},
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				borderRadius: 0.1,
				name: 'rectangle'
			}
		}, {
			name: '???',
			icon: 'icon-circle',
			data: {
				text: '???',
				rect: {
					width: 100,
					height: 100
				},
				name: 'circle',
				textMaxLine: 1
			}
		}, {
			name: '?????????',
			icon: 'icon-triangle',
			data: {
				text: '?????????',
				rect: {
					width: 100,
					height: 100
				},
				name: 'triangle'
			}
		}, {
			name: '??????',
			icon: 'icon-diamond',
			data: {
				text: '??????',
				rect: {
					width: 100,
					height: 100
				},
				name: 'diamond'
			}
		}, {
			name: '?????????',
			icon: 'icon-pentagon',
			data: {
				text: '?????????',
				rect: {
					width: 100,
					height: 100
				},
				name: 'pentagon'
			}
		}, {
			name: '?????????',
			icon: 'icon-hexagon',
			data: {
				text: '?????????',
				rect: {
					width: 100,
					height: 100
				},
				paddingTop: 10,
				paddingBottom: 10,
				name: 'hexagon'
			}
		}, {
			name: '?????????',
			icon: 'icon-pentagram',
			data: {
				text: '?????????',
				rect: {
					width: 100,
					height: 100
				},
				name: 'pentagram'
			}
		}, {
			name: '?????????',
			icon: 'icon-arrow-left',
			data: {
				text: '?????????',
				rect: {
					width: 200,
					height: 100
				},
				name: 'leftArrow'
			}
		}, {
			name: '?????????',
			icon: 'icon-arrow-right',
			data: {
				text: '?????????',
				rect: {
					width: 200,
					height: 100
				},
				name: 'rightArrow'
			}
		}, {
			name: '????????????',
			icon: 'icon-twoway-arrow',
			data: {
				text: '????????????',
				rect: {
					width: 200,
					height: 100
				},
				name: 'twowayArrow'
			}
		},
		// {
		// 	name: 'line',
		// 	icon: 'icon-line',
		// 	data: {
		// 		text: '??????',
		// 		rect: {
		// 			width: 100,
		// 			height: 100
		// 		},
		// 		name: 'line'
		// 	}
		// }, 
		{
			name: '???',
			icon: 'icon-cloud',
			data: {
				text: '???',
				rect: {
					width: 100,
					height: 100
				},
				name: 'cloud'
			}
		}, {
			name: '?????????',
			icon: 'icon-msg',
			data: {
				text: '?????????',
				rect: {
					width: 100,
					height: 100
				},
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				name: 'message'
			}
		}, {
			name: '??????',
			icon: 'icon-file',
			data: {
				text: '??????',
				rect: {
					width: 80,
					height: 100
				},
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				name: 'file'
			}
		}, {
			name: '??????',
			icon: 'icon-text',
			data: {
				text: '??????',
				rect: {
					width: 160,
					height: 30
				},
				name: 'text'
			}
		},
		// {
		// 	name: 'image',
		// 	icon: 'icon-image',
		// 	data: {
		// 		text: '',
		// 		rect: {
		// 			width: 100,
		// 			height: 100
		// 		},
		// 		name: 'image',
		// 		image: '/img/logo.png'
		// 	}
		// }, {
		// 	name: 'cube',
		// 	icon: 'icon-cube',
		// 	data: {
		// 		rect: {
		// 			width: 50,
		// 			height: 70
		// 		},
		// 		is3D: true,
		// 		z: 10,
		// 		zRotate: 15,
		// 		fillStyle: '#ddd',
		// 		name: 'cube',
		// 		icon: '\ue63c',
		// 		iconFamily: 'topology',
		// 		iconColor: '#777',
		// 		iconSize: 30
		// 	}
		// }, {
		// 	name: 'people',
		// 	icon: 'icon-people',
		// 	data: {
		// 		rect: {
		// 			width: 70,
		// 			height: 100
		// 		},
		// 		name: 'people'
		// 	}
		// }, {
		// 	name: '??????/??????',
		// 	icon: 'icon-pc',
		// 	data: {
		// 		text: '??????/??????',
		// 		rect: {
		// 			width: 200,
		// 			height: 200
		// 		},
		// 		paddingLeft: 10,
		// 		paddingRight: 10,
		// 		paddingTop: 10,
		// 		paddingBottom: 10,
		// 		// strokeStyle: 'transparent',
		// 		name: 'div'
		// 	}
		// }
	]
}, {
	group: '?????????',
	children: [{
			name: '??????/??????',
			icon: 'icon-flow-start',
			data: {
				text: '??????',
				rect: {
					width: 120,
					height: 40
				},
				borderRadius: 0.5,
				name: 'rectangle'
			}
		}, {
			name: '??????',
			icon: 'icon-rectangle',
			data: {
				text: '??????',
				rect: {
					width: 120,
					height: 40
				},
				name: 'rectangle'
			}
		}, {
			name: '??????',
			icon: 'icon-diamond',
			data: {
				text: '??????',
				rect: {
					width: 120,
					height: 60
				},
				name: 'diamond'
			}
		}, {
			name: '??????',
			icon: 'icon-flow-data',
			data: {
				text: '??????',
				rect: {
					width: 120,
					height: 50
				},
				name: 'flowData'
			}
		},
	{
		name: '??????',
		icon: 'icon-flow-ready',
		data: {
			text: '??????',
			rect: {
				width: 120,
				height: 50
			},
			name: 'hexagon'
		}
	},
		{
			name: '?????????',
			icon: 'icon-flow-subprocess',
			data: {
				text: '?????????',
				rect: {
					width: 120,
					height: 50
				},
				name: 'flowSubprocess'
			}
		}, {
			name: '?????????',
			icon: 'icon-db',
			data: {
				text: '?????????',
				rect: {
					width: 80,
					height: 120
				},
				name: 'flowDb'
			}
		}, {
			name: '??????',
			icon: 'icon-flow-document',
			data: {
				text: '??????',
				rect: {
					width: 120,
					height: 100
				},
				name: 'flowDocument'
			}
		}, {
			name: '????????????',
			icon: 'icon-internal-storage',
			data: {
				text: '????????????',
				rect: {
					width: 120,
					height: 80
				},
				name: 'flowInternalStorage'
			}
		}, {
			name: '????????????',
			icon: 'icon-extern-storage',
			data: {
				text: '????????????',
				rect: {
					width: 120,
					height: 80
				},
				name: 'flowExternStorage'
			}
		}, {
			name: '??????',
			icon: 'icon-flow-queue',
			data: {
				text: '??????',
				rect: {
					width: 100,
					height: 100
				},
				name: 'flowQueue'
			}
		}, {
			name: '????????????',
			icon: 'icon-flow-manually',
			data: {
				text: '????????????',
				rect: {
					width: 120,
					height: 80
				},
				name: 'flowManually'
			}
		}, {
			name: '??????',
			icon: 'icon-flow-display',
			data: {
				text: '??????',
				rect: {
					width: 120,
					height: 80
				},
				name: 'flowDisplay'
			}
		}, {
			name: '????????????',
			icon: 'icon-flow-parallel',
			data: {
				text: '????????????',
				rect: {
					width: 120,
					height: 50
				},
				name: 'flowParallel'
			}
		}, {
			name: '??????',
			icon: 'icon-flow-comment',
			data: {
				text: '??????',
				rect: {
					width: 100,
					height: 100
				},
				name: 'flowComment'
			}
		}
	]
}, {
	group: '?????????',
	children: [{
		name: '??????',
		icon: 'icon-inital',
		data: {
			text: '',
			rect: {
				width: 30,
				height: 30
			},
			name: 'circle',
			fillStyle: '#555',
			strokeStyle: 'transparent'
		}
	}, {
		name: '??????',
		icon: 'icon-final',
		data: {
			text: '',
			rect: {
				width: 30,
				height: 30
			},
			name: 'activityFinal'
		}
	}, {
		name: '??????',
		icon: 'icon-action',
		data: {
			text: '??????',
			rect: {
				width: 120,
				height: 50
			},
			borderRadius: 0.25,
			name: 'rectangle'
		}
	}, {
		name: '??????/??????',
		icon: 'icon-diamond',
		data: {
			text: '??????',
			rect: {
				width: 120,
				height: 50
			},
			name: 'diamond'
		}
	}, {
		name: '????????????',
		icon: 'icon-swimlane-v',
		data: {
			text: '????????????',
			rect: {
				width: 200,
				height: 500
			},
			name: 'swimlaneV'
		}
	}, {
		name: '????????????',
		icon: 'icon-swimlane-h',
		data: {
			text: '????????????',
			rect: {
				width: 500,
				height: 200
			},
			name: 'swimlaneH'
		}
	}, {
		name: '????????????/??????',
		icon: 'icon-fork-v',
		data: {
			text: '',
			rect: {
				width: 10,
				height: 150
			},
			name: 'forkV',
			fillStyle: '#555',
			strokeStyle: 'transparent'
		}
	}, {
		name: '????????????/??????',
		icon: 'icon-fork',
		data: {
			text: '',
			rect: {
				width: 150,
				height: 10
			},
			name: 'forkH',
			fillStyle: '#555',
			strokeStyle: 'transparent'
		}
	}]
}, {
	group: '??????????????????',
	children: [{
		name: '?????????',
		icon: 'icon-lifeline',
		data: {
			text: '?????????',
			rect: {
				width: 150,
				height: 400
			},
			name: 'lifeline'
		}
	}, {
		name: '??????',
		icon: 'icon-focus',
		data: {
			text: '',
			rect: {
				width: 12,
				height: 200
			},
			name: 'sequenceFocus'
		}
	}, {
		name: '?????????',
		icon: 'icon-simple-class',
		data: {
			text: 'Topolgoy',
			rect: {
				width: 270,
				height: 200
			},
			paddingTop: 40,
			font: {
				fontFamily: 'Arial',
				color: '#222',
				fontWeight: 'bold'
			},
			fillStyle: '#ffffba',
			strokeStyle: '#7e1212',
			name: 'simpleClass',
			children: [{
				text: '- name: string\n+ setName(name: string): void',
				name: 'text',
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				rectInParent: {
					x: 0,
					y: 0,
					width: '100%',
					height: '100%',
					rotate: 0
				},
				font: {
					fontFamily: 'Arial',
					color: '#222',
					textAlign: 'left',
					textBaseline: 'top'
				}
			}]
		}
	}, {
		name: '???',
		icon: 'icon-class',
		data: {
			text: 'Topolgoy',
			rect: {
				width: 270,
				height: 200
			},
			paddingTop: 40,
			font: {
				fontFamily: 'Arial',
				color: '#222',
				fontWeight: 'bold'
			},
			fillStyle: '#ffffba',
			strokeStyle: '#7e1212',
			name: 'interfaceClass',
			children: [{
				text: '- name: string',
				name: 'text',
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				rectInParent: {
					x: 0,
					y: 0,
					width: '100%',
					height: '50%',
					rotate: 0
				},
				font: {
					fontFamily: 'Arial',
					color: '#222',
					textAlign: 'left',
					textBaseline: 'top'
				}
			}, {
				text: '+ setName(name: string): void',
				name: 'text',
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10,
				rectInParent: {
					x: 0,
					y: '50%',
					width: '100%',
					height: '50%',
					rotate: 0
				},
				font: {
					fontFamily: 'Arial',
					color: '#222',
					textAlign: 'left',
					textBaseline: 'top'
				}
			}]
		}
	}]
}, {
	group: '????????????',
	children: [{
		name: '?????????',
		icon: 'icon-line-chart',
		data: {
			text: '?????????',
			rect: {
				width: 300,
				height: 200
			},
			name: 'echarts',
			data: {
				echarts: {
					option: {
						xAxis: {
							type: 'category',
							data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						yAxis: {
							type: 'value'
						},
						series: [{
							data: [820, 932, 901, 934, 1290, 1330, 1320],
							type: 'line'
						}]
					}
				}
			}
		}
	}, {
		name: '?????????',
		icon: 'icon-bar-chart',
		data: {
			text: '?????????',
			rect: {
				width: 300,
				height: 200
			},
			name: 'echarts',
			data: {
				echarts: {
					option: {
						color: ['#3398DB'],
						tooltip: {
							trigger: 'axis',
							axisPointer: { // ??????????????????????????????????????????
								type: 'shadow' // ??????????????????????????????'line' | 'shadow'
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
							axisTick: {
								alignWithLabel: true
							}
						}],
						yAxis: [{
							type: 'value'
						}],
						series: [{
							name: '????????????',
							type: 'bar',
							barWidth: '60%',
							data: [10, 52, 200, 334, 390, 330, 220]
						}]
					}
				}
			}
		}
	}, {
		name: '??????',
		icon: 'icon-pie-chart',
		data: {
			text: '??????',
			rect: {
				width: 200,
				height: 200
			},
			name: 'echarts',
			data: {
				echarts: {
					option: {
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						legend: {
							orient: 'vertical',
							x: 'left',
							data: ['????????????', '????????????', '????????????', '????????????', '????????????']
						},
						series: [{
							name: '????????????',
							type: 'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							label: {
								normal: {
									show: false,
									position: 'center'
								},
								emphasis: {
									show: true,
									textStyle: {
										fontSize: '30',
										fontWeight: 'bold'
									}
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [{
								value: 335,
								name: '????????????'
							}, {
								value: 310,
								name: '????????????'
							}, {
								value: 234,
								name: '????????????'
							}, {
								value: 135,
								name: '????????????'
							}, {
								value: 1548,
								name: '????????????'
							}]
						}]
					}
				}
			}
		}
	}, {
		name: '?????????',
		icon: 'icon-dashboard-chart',
		data: {
			text: '?????????',
			rect: {
				width: 300,
				height: 300
			},
			name: 'echarts',
			data: {
				echarts: {
					option: {
						tooltip: {
							formatter: '{a} <br/>{b} : {c}%'
						},
						toolbox: {
							feature: {
								restore: {},
								saveAsImage: {}
							}
						},
						series: [{
							name: '????????????',
							type: 'gauge',
							detail: {
								formatter: '{value}%'
							},
							data: [{
								value: 50,
								name: '?????????'
							}]
						}]
					}
				}
			}
		}
	}]
}]