/**
 * Live2D Cubism Core
 * (C) 2019 Live2D Inc. All rights reserved.
 *
 * This file is licensed pursuant to the license agreement below.
 * This file corresponds to the "Redistributable Code" in the agreement.
 * https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html
*/

(function () {
    var j = true;
    function aa() {
        if (j) {
            return;
        }
        this._$MT = null;
        this._$5S = null;
        this._$NP = 0;
        aa._$42++;
        this._$5S = new y(this);
    }
    aa._$0s = 1;
    aa._$4s = 2;
    aa._$42 = 0;
    aa._$62 = function (aQ, aU) {
        try {
            if (aU instanceof ArrayBuffer) {
                aU = new DataView(aU);
            }
            if (!(aU instanceof DataView)) {
                throw new J("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
            }
            var aS = new K(aU);
            var aM = aS._$ST();
            var aK = aS._$ST();
            var aJ = aS._$ST();
            var aN;
            if (aM == 109 && aK == 111 && aJ == 99) {
                aN = aS._$ST();
            } else {
                throw new J("_$gi _$C _$li , _$Q0 _$P0.");
            }
            aS._$gr(aN);
            if (aN > ay._$T7) {
                aQ._$NP |= aa._$4s;
                var aR = ay._$T7;
                var aI = "_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + aR + " < _$f0 : " + aN + " )@_$SS#loadModel()\n";
                throw new J(aI);
            }
            var aL = aS._$nP();
            if (aN >= ay._$s7) {
                var aH = aS._$9T();
                var aT = aS._$9T();
                if (aH != -30584 || aT != -30584) {
                    aQ._$NP |= aa._$0s;
                    throw new J("_$gi _$C _$li , _$0 _$6 _$Ui.");
                }
            }
            aQ._$KS(aL);
            var aP = aQ.getModelContext();
            aP.setDrawParam(aQ.getDrawParam());
            aP.init();
        } catch (aO) {
            q._$Rb(aO);
        }
    };
    aa.prototype._$KS = function (aH) {
        this._$MT = aH;
    };
    aa.prototype.getModelImpl = function () {
        if (this._$MT == null) {
            this._$MT = new w();
            this._$MT._$zP();
        }
        return this._$MT;
    };
    aa.prototype.getCanvasWidth = function () {
        if (this._$MT == null) {
            return 0;
        }
        return this._$MT.getCanvasWidth();
    };
    aa.prototype.getCanvasHeight = function () {
        if (this._$MT == null) {
            return 0;
        }
        return this._$MT.getCanvasHeight();
    };
    aa.prototype.getParamFloat = function (aH) {
        if (typeof aH != "number") {
            aH = this._$5S.getParamIndex(z.getID(aH));
        }
        return this._$5S.getParamFloat(aH);
    };
    aa.prototype.setParamFloat = function (aH, aJ, aI) {
        if (typeof aH != "number") {
            aH = this._$5S.getParamIndex(z.getID(aH));
        }
        if (arguments.length < 3) {
            aI = 1;
        }
        this._$5S.setParamFloat(aH, this._$5S.getParamFloat(aH) * (1 - aI) + aJ * aI);
    };
    aa.prototype.addToParamFloat = function (aH, aJ, aI) {
        if (typeof aH != "number") {
            aH = this._$5S.getParamIndex(z.getID(aH));
        }
        if (arguments.length < 3) {
            aI = 1;
        }
        this._$5S.setParamFloat(aH, this._$5S.getParamFloat(aH) + aJ * aI);
    };
    aa.prototype.multParamFloat = function (aH, aJ, aI) {
        if (typeof aH != "number") {
            aH = this._$5S.getParamIndex(z.getID(aH));
        }
        if (arguments.length < 3) {
            aI = 1;
        }
        this._$5S.setParamFloat(aH, this._$5S.getParamFloat(aH) * (1 + (aJ - 1) * aI));
    };
    aa.prototype.getParamIndex = function (aH) {
        return this._$5S.getParamIndex(z.getID(aH));
    };
    aa.prototype.loadParam = function () {
        this._$5S.loadParam();
    };
    aa.prototype.saveParam = function () {
        this._$5S.saveParam();
    };
    aa.prototype.init = function () {
        this._$5S.init();
    };
    aa.prototype.update = function () {
        this._$5S.update();
    };
    aa.prototype._$Rs = function () {
        q._$li("_$60 _$PT _$Rs()");
        return -1;
    };
    aa.prototype._$Ds = function (aH) {
        q._$li("_$60 _$PT _$SS#_$Ds() \n");
    };
    aa.prototype._$K2 = function () { };
    aa.prototype.draw = function () { };
    aa.prototype.getModelContext = function () {
        return this._$5S;
    };
    aa.prototype._$s2 = function () {
        return this._$NP;
    };
    aa.prototype._$P7 = function (aK, aR, aH, a0) {
        var aU = -1;
        var aY = 0;
        var aM = this;
        var aJ = 0.5;
        var aI = 0.15;
        var aX = true;
        if (aH == 0) {
            for (var aV = 0; aV < aK.length; aV++) {
                var aP = aK[aV];
                var aO = aR[aV];
                var aS = aM.getParamFloat(aP) != 0;
                aM.setPartsOpacity(aO, aS ? 1 : 0);
            }
            return;
        } else {
            if (aK.length == 1) {
                var aP = aK[0];
                var aT = aM.getParamFloat(aP) != 0;
                var aO = aR[0];
                var aQ = aM.getPartsOpacity(aO);
                var aW = aH / a0;
                if (aT) {
                    aQ += aW;
                    if (aQ > 1) {
                        aQ = 1;
                    }
                } else {
                    aQ -= aW;
                    if (aQ < 0) {
                        aQ = 0;
                    }
                }
                aM.setPartsOpacity(aO, aQ);
            } else {
                for (var aV = 0; aV < aK.length; aV++) {
                    var aP = aK[aV];
                    var aS = aM.getParamFloat(aP) != 0;
                    if (aS) {
                        if (aU >= 0) {
                            break;
                        }
                        aU = aV;
                        var aO = aR[aV];
                        aY = aM.getPartsOpacity(aO);
                        aY += aH / a0;
                        if (aY > 1) {
                            aY = 1;
                        }
                    }
                }
                if (aU < 0) {
                    console.log("No _$wi _$q0/ _$U default[%s]", aK[0]);
                    aU = 0;
                    aY = 1;
                    aM.loadParam();
                    aM.setParamFloat(aK[aU], aY);
                    aM.saveParam();
                }
                for (var aV = 0; aV < aK.length; aV++) {
                    var aO = aR[aV];
                    if (aU == aV) {
                        aM.setPartsOpacity(aO, aY);
                    } else {
                        var aL = aM.getPartsOpacity(aO);
                        var aZ;
                        if (aY < aJ) {
                            aZ = (aY * (aJ - 1)) / aJ + 1;
                        } else {
                            aZ = ((1 - aY) * aJ) / (1 - aJ);
                        }
                        if (aX) {
                            var aN = (1 - aZ) * (1 - aY);
                            if (aN > aI) {
                                aZ = 1 - aI / (1 - aY);
                            }
                        }
                        if (aL > aZ) {
                            aL = aZ;
                        }
                        aM.setPartsOpacity(aO, aL);
                    }
                }
            }
        }
    };
    aa.prototype.setPartsOpacity = function (aI, aH) {
        if (typeof aI != "number") {
            aI = this._$5S.getPartsDataIndex(i.getID(aI));
        }
        this._$5S.setPartsOpacity(aI, aH);
    };
    aa.prototype.getPartsDataIndex = function (aH) {
        if (!(aH instanceof i)) {
            aH = i.getID(aH);
        }
        return this._$5S.getPartsDataIndex(aH);
    };
    aa.prototype.getPartsOpacity = function (aH) {
        if (typeof aH != "number") {
            aH = this._$5S.getPartsDataIndex(i.getID(aH));
        }
        if (aH < 0) {
            return 0;
        }
        return this._$5S.getPartsOpacity(aH);
    };
    aa.prototype.getDrawParam = function () { };
    aa.prototype.getDrawDataIndex = function (aH) {
        return this._$5S.getDrawDataIndex(Z.getID(aH));
    };
    aa.prototype.getDrawData = function (aH) {
        return this._$5S.getDrawData(aH);
    };
    aa.prototype.getTransformedPoints = function (aH) {
        var aI = this._$5S._$C2(aH);
        if (aI instanceof ag) {
            return aI.getTransformedPoints();
        }
        return null;
    };
    aa.prototype.getIndexArray = function (aI) {
        if (aI < 0 || aI >= this._$5S._$aS.length) {
            return null;
        }
        var aH = this._$5S._$aS[aI];
        if (aH != null && aH.getType() == a._$wb) {
            if (aH instanceof b) {
                return aH.getIndexArray();
            }
        }
        return null;
    };
    function W(aJ) {
        if (j) {
            return;
        }
        this.clipContextList = new Array();
        this.glcontext = aJ.gl;
        this.dp_webgl = aJ;
        this.curFrameNo = 0;
        this.firstError_clipInNotUpdate = true;
        this.colorBuffer = 0;
        this.isInitGLFBFunc = false;
        this.tmpBoundsOnModel = new av();
        if (Q.glContext.length > Q.frameBuffers.length) {
            this.curFrameNo = this.getMaskRenderTexture();
        } else {
        }
        this.tmpModelToViewMatrix = new ac();
        this.tmpMatrix2 = new ac();
        this.tmpMatrixForMask = new ac();
        this.tmpMatrixForDraw = new ac();
        this.CHANNEL_COLORS = new Array();
        var aI = new o();
        aI = new o();
        aI.r = 0;
        aI.g = 0;
        aI.b = 0;
        aI.a = 1;
        this.CHANNEL_COLORS.push(aI);
        aI = new o();
        aI.r = 1;
        aI.g = 0;
        aI.b = 0;
        aI.a = 0;
        this.CHANNEL_COLORS.push(aI);
        aI = new o();
        aI.r = 0;
        aI.g = 1;
        aI.b = 0;
        aI.a = 0;
        this.CHANNEL_COLORS.push(aI);
        aI = new o();
        aI.r = 0;
        aI.g = 0;
        aI.b = 1;
        aI.a = 0;
        this.CHANNEL_COLORS.push(aI);
        for (var aH = 0; aH < this.CHANNEL_COLORS.length; aH++) {
            this.dp_webgl.setChannelFlagAsColor(aH, this.CHANNEL_COLORS[aH]);
        }
    }
    W.CHANNEL_COUNT = 4;
    W.RENDER_TEXTURE_USE_MIPMAP = false;
    W.NOT_USED_FRAME = -100;
    W.prototype._$L7 = function () {
        if (this.tmpModelToViewMatrix) {
            this.tmpModelToViewMatrix = null;
        }
        if (this.tmpMatrix2) {
            this.tmpMatrix2 = null;
        }
        if (this.tmpMatrixForMask) {
            this.tmpMatrixForMask = null;
        }
        if (this.tmpMatrixForDraw) {
            this.tmpMatrixForDraw = null;
        }
        if (this.tmpBoundsOnModel) {
            this.tmpBoundsOnModel = null;
        }
        if (this.CHANNEL_COLORS) {
            for (var aH = this.CHANNEL_COLORS.length - 1; aH >= 0; --aH) {
                this.CHANNEL_COLORS.splice(aH, 1);
            }
            this.CHANNEL_COLORS = [];
        }
        this.releaseShader();
    };
    W.prototype.releaseShader = function () {
        var aI = Q.frameBuffers.length;
        for (var aH = 0; aH < aI; aH++) {
            this.gl.deleteFramebuffer(Q.frameBuffers[aH].framebuffer);
        }
        Q.frameBuffers = [];
        Q.glContext = [];
    };
    W.prototype.init = function (aO, aN, aL) {
        for (var aM = 0; aM < aN.length; aM++) {
            var aH = aN[aM].getClipIDList();
            if (aH == null) {
                continue;
            }
            var aJ = this.findSameClip(aH);
            if (aJ == null) {
                aJ = new U(this, aO, aH);
                this.clipContextList.push(aJ);
            }
            var aI = aN[aM].getDrawDataID();
            var aK = aO.getDrawDataIndex(aI);
            aJ.addClippedDrawData(aI, aK);
            var aP = aL[aM];
            aP.clipBufPre_clipContext = aJ;
        }
    };
    W.prototype.getMaskRenderTexture = function () {
        var aH = null;
        aH = this.dp_webgl.createFramebuffer();
        Q.frameBuffers[this.dp_webgl.glno] = aH;
        return this.dp_webgl.glno;
    };
    W.prototype.setupClip = function (a1, aQ) {
        var aK = 0;
        for (var aO = 0; aO < this.clipContextList.length; aO++) {
            var aP = this.clipContextList[aO];
            this.calcClippedDrawTotalBounds(a1, aP);
            if (aP.isUsing) {
                aK++;
            }
        }
        if (aK > 0) {
            var aM = aQ.gl.getParameter(aQ.gl.FRAMEBUFFER_BINDING);
            var aW = new Array(4);
            aW[0] = 0;
            aW[1] = 0;
            aW[2] = aQ.gl.canvas.width;
            aW[3] = aQ.gl.canvas.height;
            aQ.gl.viewport(0, 0, Q.clippingMaskBufferSize, Q.clippingMaskBufferSize);
            this.setupLayoutBounds(aK);
            aQ.gl.bindFramebuffer(aQ.gl.FRAMEBUFFER, Q.frameBuffers[this.curFrameNo].framebuffer);
            aQ.gl.clearColor(0, 0, 0, 0);
            aQ.gl.clear(aQ.gl.COLOR_BUFFER_BIT);
            for (var aO = 0; aO < this.clipContextList.length; aO++) {
                var aP = this.clipContextList[aO];
                var aT = aP.allClippedDrawRect;
                var aN = aP.layoutChannelNo;
                var aV = aP.layoutBounds;
                var aJ = 0.05;
                this.tmpBoundsOnModel._$jL(aT);
                this.tmpBoundsOnModel.expand(aT.width * aJ, aT.height * aJ);
                var aZ = aV.width / this.tmpBoundsOnModel.width;
                var aY = aV.height / this.tmpBoundsOnModel.height;
                this.tmpMatrix2.identity();
                this.tmpMatrix2.translate(-1, -1, 0);
                this.tmpMatrix2.scale(2, 2, 1);
                this.tmpMatrix2.translate(aV.x, aV.y, 0);
                this.tmpMatrix2.scale(aZ, aY, 1);
                this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0);
                this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m);
                this.tmpMatrix2.identity();
                this.tmpMatrix2.translate(aV.x, aV.y, 0);
                this.tmpMatrix2.scale(aZ, aY, 1);
                this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0);
                this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
                var aH = this.tmpMatrixForMask.getArray();
                for (var aX = 0; aX < 16; aX++) {
                    aP.matrixForMask[aX] = aH[aX];
                }
                var a0 = this.tmpMatrixForDraw.getArray();
                for (var aX = 0; aX < 16; aX++) {
                    aP.matrixForDraw[aX] = a0[aX];
                }
                var aS = aP.clippingMaskDrawIndexList.length;
                for (var aU = 0; aU < aS; aU++) {
                    var aR = aP.clippingMaskDrawIndexList[aU];
                    var aI = a1.getDrawData(aR);
                    var aL = a1._$C2(aR);
                    aQ.setClipBufPre_clipContextForMask(aP);
                    aI.draw(aQ, a1, aL);
                }
            }
            aQ.gl.bindFramebuffer(aQ.gl.FRAMEBUFFER, aM);
            aQ.setClipBufPre_clipContextForMask(null);
            aQ.gl.viewport(aW[0], aW[1], aW[2], aW[3]);
        }
    };
    W.prototype.getColorBuffer = function () {
        return this.colorBuffer;
    };
    W.prototype.findSameClip = function (aK) {
        for (var aN = 0; aN < this.clipContextList.length; aN++) {
            var aO = this.clipContextList[aN];
            var aH = aO.clipIDList.length;
            if (aH != aK.length) {
                continue;
            }
            var aI = 0;
            for (var aM = 0; aM < aH; aM++) {
                var aL = aO.clipIDList[aM];
                for (var aJ = 0; aJ < aH; aJ++) {
                    if (aK[aJ] == aL) {
                        aI++;
                        break;
                    }
                }
            }
            if (aI == aH) {
                return aO;
            }
        }
        return null;
    };
    W.prototype.calcClippedDrawTotalBounds = function (a6, aV) {
        var aU = a6._$Ri.getModelImpl().getCanvasWidth();
        var a5 = a6._$Ri.getModelImpl().getCanvasHeight();
        var aJ = aU > a5 ? aU : a5;
        var aT = aJ;
        var aR = aJ;
        var aS = 0;
        var aP = 0;
        var aL = aV.clippedDrawContextList.length;
        for (var aM = 0; aM < aL; aM++) {
            var aW = aV.clippedDrawContextList[aM];
            var aN = aW.drawDataIndex;
            var aK = a6._$C2(aN);
            if (aK._$yo()) {
                var aX = aK.getTransformedPoints();
                var a4 = aX.length;
                var aI = [];
                var aH = [];
                var aO = 0;
                for (var a3 = aw._$i2; a3 < a4; a3 += aw._$No) {
                    aI[aO] = aX[a3];
                    aH[aO] = aX[a3 + 1];
                    aO++;
                }
                var a2 = Math.min.apply(null, aI);
                var a1 = Math.min.apply(null, aH);
                var a0 = Math.max.apply(null, aI);
                var aZ = Math.max.apply(null, aH);
                if (a2 < aT) {
                    aT = a2;
                }
                if (a1 < aR) {
                    aR = a1;
                }
                if (a0 > aS) {
                    aS = a0;
                }
                if (aZ > aP) {
                    aP = aZ;
                }
            }
        }
        if (aT == aJ) {
            aV.allClippedDrawRect.x = 0;
            aV.allClippedDrawRect.y = 0;
            aV.allClippedDrawRect.width = 0;
            aV.allClippedDrawRect.height = 0;
            aV.isUsing = false;
        } else {
            var aQ = aS - aT;
            var aY = aP - aR;
            aV.allClippedDrawRect.x = aT;
            aV.allClippedDrawRect.y = aR;
            aV.allClippedDrawRect.width = aQ;
            aV.allClippedDrawRect.height = aY;
            aV.isUsing = true;
        }
    };
    W.prototype.setupLayoutBounds = function (aQ) {
        var aI = aQ / W.CHANNEL_COUNT;
        var aP = aQ % W.CHANNEL_COUNT;
        aI = ~~aI;
        aP = ~~aP;
        var aH = 0;
        for (var aJ = 0; aJ < W.CHANNEL_COUNT; aJ++) {
            var aM = aI + (aJ < aP ? 1 : 0);
            if (aM == 0) {
            } else {
                if (aM == 1) {
                    var aL = this.clipContextList[aH++];
                    aL.layoutChannelNo = aJ;
                    aL.layoutBounds.x = 0;
                    aL.layoutBounds.y = 0;
                    aL.layoutBounds.width = 1;
                    aL.layoutBounds.height = 1;
                } else {
                    if (aM == 2) {
                        for (var aO = 0; aO < aM; aO++) {
                            var aN = aO % 2;
                            var aK = 0;
                            aN = ~~aN;
                            var aL = this.clipContextList[aH++];
                            aL.layoutChannelNo = aJ;
                            aL.layoutBounds.x = aN * 0.5;
                            aL.layoutBounds.y = 0;
                            aL.layoutBounds.width = 0.5;
                            aL.layoutBounds.height = 1;
                        }
                    } else {
                        if (aM <= 4) {
                            for (var aO = 0; aO < aM; aO++) {
                                var aN = aO % 2;
                                var aK = aO / 2;
                                aN = ~~aN;
                                aK = ~~aK;
                                var aL = this.clipContextList[aH++];
                                aL.layoutChannelNo = aJ;
                                aL.layoutBounds.x = aN * 0.5;
                                aL.layoutBounds.y = aK * 0.5;
                                aL.layoutBounds.width = 0.5;
                                aL.layoutBounds.height = 0.5;
                            }
                        } else {
                            if (aM <= 9) {
                                for (var aO = 0; aO < aM; aO++) {
                                    var aN = aO % 3;
                                    var aK = aO / 3;
                                    aN = ~~aN;
                                    aK = ~~aK;
                                    var aL = this.clipContextList[aH++];
                                    aL.layoutChannelNo = aJ;
                                    aL.layoutBounds.x = aN / 3;
                                    aL.layoutBounds.y = aK / 3;
                                    aL.layoutBounds.width = 1 / 3;
                                    aL.layoutBounds.height = 1 / 3;
                                }
                            } else {
                                q._$li("_$6 _$0P mask count : %d", aM);
                            }
                        }
                    }
                }
            }
        }
    };
    function U(aH, aK, aI) {
        this.clipIDList = new Array();
        this.clipIDList = aI;
        this.clippingMaskDrawIndexList = new Array();
        for (var aJ = 0; aJ < aI.length; aJ++) {
            this.clippingMaskDrawIndexList.push(aK.getDrawDataIndex(aI[aJ]));
        }
        this.clippedDrawContextList = new Array();
        this.isUsing = true;
        this.layoutChannelNo = 0;
        this.layoutBounds = new av();
        this.allClippedDrawRect = new av();
        this.matrixForMask = new Float32Array(16);
        this.matrixForDraw = new Float32Array(16);
        this.owner = aH;
    }
    U.prototype.addClippedDrawData = function (aJ, aI) {
        var aH = new R(aJ, aI);
        this.clippedDrawContextList.push(aH);
    };
    function R(aI, aH) {
        this._$gP = aI;
        this.drawDataIndex = aH;
    }
    function I() {
        if (j) {
            return;
        }
        this.color = null;
    }
    function ah() {
        if (j) {
            return;
        }
        this._$dP = null;
        this._$eo = null;
        this._$V0 = null;
        this._$dP = 1000;
        this._$eo = 1000;
        this._$V0 = 1;
        this._$a0();
    }
    ah._$JT = function (aP, aN, aO) {
        var aQ = aP / aN;
        var a1 = aO / aN;
        var aU = a1;
        var aZ = 1 / 3;
        var aR = 2 / 3;
        var a0 = 1 - (1 - a1) * (1 - a1);
        var a2 = 1 - (1 - aU) * (1 - aU);
        var aM = 0;
        var aL = (1 - a1) * aZ * a0 + (aU * aR + (1 - aU) * aZ) * (1 - a0);
        var aK = (aU + (1 - aU) * aR) * a2 + (a1 * aZ + (1 - a1) * aR) * (1 - a2);
        var aJ = 1;
        var aY = aJ - 3 * aK + 3 * aL - aM;
        var aX = 3 * aK - 6 * aL + 3 * aM;
        var aW = 3 * aL - 3 * aM;
        var aV = aM;
        if (aQ <= 0) {
            return 0;
        } else {
            if (aQ >= 1) {
                return 1;
            }
        }
        var aS = aQ;
        var aI = aS * aS;
        var aH = aS * aI;
        var aT = aY * aH + aX * aI + aW * aS + aV;
        return aT;
    };
    ah.prototype._$a0 = function () { };
    ah.prototype.setFadeIn = function (aH) {
        this._$dP = aH;
    };
    ah.prototype.setFadeOut = function (aH) {
        this._$eo = aH;
    };
    ah.prototype._$pT = function (aH) {
        this._$V0 = aH;
    };
    ah.prototype.getFadeOut = function () {
        return this._$eo;
    };
    ah.prototype._$4T = function () {
        return this._$eo;
    };
    ah.prototype._$mT = function () {
        return this._$V0;
    };
    ah.prototype.getDurationMSec = function () {
        return -1;
    };
    ah.prototype.getLoopDurationMSec = function () {
        return -1;
    };
    ah.prototype.updateParam = function (aJ, aN) {
        if (!aN._$AT || aN._$9L) {
            return;
        }
        var aL = P.getUserTimeMSec();
        if (aN._$z2 < 0) {
            aN._$z2 = aL;
            aN._$bs = aL;
            var aM = this.getDurationMSec();
            if (aN._$Do < 0) {
                aN._$Do = aM <= 0 ? -1 : aN._$z2 + aM;
            }
        }
        var aI = this._$V0;
        var aH = this._$dP == 0 ? 1 : A._$r2((aL - aN._$bs) / this._$dP);
        var aK = this._$eo == 0 || aN._$Do < 0 ? 1 : A._$r2((aN._$Do - aL) / this._$eo);
        aI = aI * aH * aK;
        if (!(0 <= aI && aI <= 1)) {
            console.log("### assert!! ### ");
        }
        this.updateParamExe(aJ, aL, aI, aN);
        if (aN._$Do > 0 && aN._$Do < aL) {
            aN._$9L = true;
        }
    };
    ah.prototype.updateParamExe = function (aH, aI, aJ, aK) { };
    function q() { }
    q._$8s = 0;
    q._$fT = new Object();
    q.start = function (aI) {
        var aH = q._$fT[aI];
        if (aH == null) {
            aH = new af();
            aH._$r = aI;
            q._$fT[aI] = aH;
        }
        aH._$0S = P.getSystemTimeMSec();
    };
    q.dump = function (aJ) {
        var aH = q._$fT[aJ];
        if (aH != null) {
            var aI = P.getSystemTimeMSec();
            var aK = aI - aH._$0S;
            console.log(aJ + " : " + aK + "ms");
            return aK;
        } else {
            return -1;
        }
    };
    q.end = function (aJ) {
        var aH = q._$fT[aJ];
        if (aH != null) {
            var aI = P.getSystemTimeMSec();
            return aI - aH._$0S;
        } else {
            return -1;
        }
    };
    q._$li = function (aI, aH) {
        console.log("_$li : " + aI + "\n", aH);
    };
    q._$Ji = function (aI, aH) {
        console.log(aI, aH);
    };
    q._$dL = function (aI, aH) {
        console.log(aI, aH);
        console.log("\n");
    };
    q._$KL = function (aJ, aI) {
        for (var aH = 0; aH < aI; aH++) {
            if (aH % 16 == 0 && aH > 0) {
                console.log("\n");
            } else {
                if (aH % 8 == 0 && aH > 0) {
                    console.log("  ");
                }
            }
            console.log("%02X ", aJ[aH] & 255);
        }
        console.log("\n");
    };
    q._$nr = function (aL, aI, aK) {
        console.log("%s\n", aL);
        var aH = aI.length;
        for (var aJ = 0; aJ < aH; ++aJ) {
            console.log("%5d", aI[aJ]);
            console.log("%s\n", aK);
            console.log(",");
        }
        console.log("\n");
    };
    q._$Rb = function (aH) {
        console.log("dump exception : " + aH);
        console.log("stack :: " + aH.stack);
    };
    function af() {
        this._$r = null;
        this._$0S = null;
    }
    function F() {
        if (j) {
            return;
        }
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
    }
    F.prototype._$8P = function () {
        return 0.5 * (this.x + this.x + this.width);
    };
    F.prototype._$6P = function () {
        return 0.5 * (this.y + this.y + this.height);
    };
    F.prototype._$EL = function () {
        return this.x + this.width;
    };
    F.prototype._$5T = function () {
        return this.y + this.height;
    };
    F.prototype._$jL = function (aI, aK, aJ, aH) {
        this.x = aI;
        this.y = aK;
        this.width = aJ;
        this.height = aH;
    };
    F.prototype._$jL = function (aH) {
        this.x = aH.x;
        this.y = aH.y;
        this.width = aH.width;
        this.height = aH.height;
    };
    function i(aH) {
        if (j) {
            return;
        }
        ak.prototype.constructor.call(this, aH);
    }
    i.prototype = new ak();
    i._$tP = new Object();
    i._$27 = function () {
        i._$tP.clear();
    };
    i.getID = function (aH) {
        var aI = i._$tP[aH];
        if (aI == null) {
            aI = new i(aH);
            i._$tP[aH] = aI;
        }
        return aI;
    };
    i.prototype._$3s = function () {
        return new i();
    };
    function S() { }
    function z(aH) {
        if (j) {
            return;
        }
        ak.prototype.constructor.call(this, aH);
    }
    z.prototype = new ak();
    z._$tP = new Object();
    z._$27 = function () {
        z._$tP.clear();
    };
    z.getID = function (aH) {
        var aI = z._$tP[aH];
        if (aI == null) {
            aI = new z(aH);
            z._$tP[aH] = aI;
        }
        return aI;
    };
    z.prototype._$3s = function () {
        return new z();
    };
    function w() {
        if (j) {
            return;
        }
        this._$vo = null;
        this._$F2 = null;
        this._$ao = 400;
        this._$1S = 400;
        w._$42++;
    }
    w._$42 = 0;
    w.prototype._$zP = function () {
        if (this._$vo == null) {
            this._$vo = new an();
        }
        if (this._$F2 == null) {
            this._$F2 = new Array();
        }
    };
    w.prototype.getCanvasWidth = function () {
        return this._$ao;
    };
    w.prototype.getCanvasHeight = function () {
        return this._$1S;
    };
    w.prototype._$F0 = function (aH) {
        this._$vo = aH._$nP();
        this._$F2 = aH._$nP();
        this._$ao = aH._$6L();
        this._$1S = aH._$6L();
    };
    w.prototype._$6S = function (aH) {
        this._$F2.push(aH);
    };
    w.prototype._$Xr = function () {
        return this._$F2;
    };
    w.prototype._$E2 = function () {
        return this._$vo;
    };
    function u() {
        if (j) {
            return;
        }
        this.p1 = new N();
        this.p2 = new N();
        this._$Fo = 0;
        this._$Db = 0;
        this._$L2 = 0;
        this._$M2 = 0;
        this._$ks = 0;
        this._$9b = 0;
        this._$iP = 0;
        this._$iT = 0;
        this._$lL = new Array();
        this._$qP = new Array();
        this.setup(0.3, 0.5, 0.1);
    }
    u.prototype.setup = function (aJ, aI, aH) {
        this._$ks = this._$Yb();
        this.p2._$xT();
        if (arguments.length == 3) {
            this._$Fo = aJ;
            this._$L2 = aI;
            this.p1._$p = aH;
            this.p2._$p = aH;
            this.p2.y = aJ;
            this.setup();
        }
    };
    u.prototype.getPhysicsPoint1 = function () {
        return this.p1;
    };
    u.prototype.getPhysicsPoint2 = function () {
        return this.p2;
    };
    u.prototype._$qr = function () {
        return this._$Db;
    };
    u.prototype._$pr = function (aH) {
        this._$Db = aH;
    };
    u.prototype._$5r = function () {
        return this._$M2;
    };
    u.prototype._$Cs = function () {
        return this._$9b;
    };
    u.prototype._$Yb = function () {
        return (-180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y))) / Math.PI;
    };
    u.prototype.addSrcParam = function (aJ, aH, aL, aI) {
        var aK = new h(aJ, aH, aL, aI);
        this._$lL.push(aK);
    };
    u.prototype.addTargetParam = function (aJ, aH, aK, aI) {
        var aL = new aF(aJ, aH, aK, aI);
        this._$qP.push(aL);
    };
    u.prototype.update = function (aI, aL) {
        if (this._$iP == 0) {
            this._$iP = this._$iT = aL;
            this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
            return;
        }
        var aK = (aL - this._$iT) / 1000;
        if (aK != 0) {
            for (var aJ = this._$lL.length - 1; aJ >= 0; --aJ) {
                var aM = this._$lL[aJ];
                aM._$oP(aI, this);
            }
            this._$oo(aI, aK);
            this._$M2 = this._$Yb();
            this._$9b = (this._$M2 - this._$ks) / aK;
            this._$ks = this._$M2;
        }
        for (var aJ = this._$qP.length - 1; aJ >= 0; --aJ) {
            var aH = this._$qP[aJ];
            aH._$YS(aI, this);
        }
        this._$iT = aL;
    };
    u.prototype._$oo = function (aN, aI) {
        if (aI < 0.033) {
            aI = 0.033;
        }
        var aU = 1 / aI;
        this.p1.vx = (this.p1.x - this.p1._$s0) * aU;
        this.p1.vy = (this.p1.y - this.p1._$70) * aU;
        this.p1.ax = (this.p1.vx - this.p1._$7L) * aU;
        this.p1.ay = (this.p1.vy - this.p1._$HL) * aU;
        this.p1.fx = this.p1.ax * this.p1._$p;
        this.p1.fy = this.p1.ay * this.p1._$p;
        this.p1._$xT();
        var aM = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x);
        var aL;
        var aV;
        var aR = Math.cos(aM);
        var aH = Math.sin(aM);
        var aW = 9.8 * this.p2._$p;
        var aQ = this._$Db * aC._$bS;
        var aP = aW * Math.cos(aM - aQ);
        aL = aP * aH;
        aV = aP * aR;
        var aK = -this.p1.fx * aH * aH;
        var aT = -this.p1.fy * aH * aR;
        var aJ = -this.p2.vx * this._$L2;
        var aS = -this.p2.vy * this._$L2;
        this.p2.fx = aL + aK + aJ;
        this.p2.fy = aV + aT + aS;
        this.p2.ax = this.p2.fx / this.p2._$p;
        this.p2.ay = this.p2.fy / this.p2._$p;
        this.p2.vx += this.p2.ax * aI;
        this.p2.vy += this.p2.ay * aI;
        this.p2.x += this.p2.vx * aI;
        this.p2.y += this.p2.vy * aI;
        var aO = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
        this.p2.x = this.p1.x + (this._$Fo * (this.p2.x - this.p1.x)) / aO;
        this.p2.y = this.p1.y + (this._$Fo * (this.p2.y - this.p1.y)) / aO;
        this.p2.vx = (this.p2.x - this.p2._$s0) * aU;
        this.p2.vy = (this.p2.y - this.p2._$70) * aU;
        this.p2._$xT();
    };
    function N() {
        this._$p = 1;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.fx = 0;
        this.fy = 0;
        this._$s0 = 0;
        this._$70 = 0;
        this._$7L = 0;
        this._$HL = 0;
    }
    N.prototype._$xT = function () {
        this._$s0 = this.x;
        this._$70 = this.y;
        this._$7L = this.vx;
        this._$HL = this.vy;
    };
    function at(aJ, aI, aH) {
        this._$wL = null;
        this.scale = null;
        this._$V0 = null;
        this._$wL = aJ;
        this.scale = aI;
        this._$V0 = aH;
    }
    at.prototype._$oP = function (aI, aH) { };
    function h(aJ, aK, aI, aH) {
        at.prototype.constructor.call(this, aK, aI, aH);
        this._$tL = null;
        this._$tL = aJ;
    }
    h.prototype = new at();
    h.prototype._$oP = function (aJ, aH) {
        var aK = this.scale * aJ.getParamFloat(this._$wL);
        var aL = aH.getPhysicsPoint1();
        switch (this._$tL) {
            default:
            case u.Src.SRC_TO_X:
                aL.x = aL.x + (aK - aL.x) * this._$V0;
                break;
            case u.Src.SRC_TO_Y:
                aL.y = aL.y + (aK - aL.y) * this._$V0;
                break;
            case u.Src.SRC_TO_G_ANGLE:
                var aI = aH._$qr();
                aI = aI + (aK - aI) * this._$V0;
                aH._$pr(aI);
                break;
        }
    };
    function d(aJ, aI, aH) {
        this._$wL = null;
        this.scale = null;
        this._$V0 = null;
        this._$wL = aJ;
        this.scale = aI;
        this._$V0 = aH;
    }
    d.prototype._$YS = function (aI, aH) { };
    function aF(aI, aK, aJ, aH) {
        d.prototype.constructor.call(this, aK, aJ, aH);
        this._$YP = null;
        this._$YP = aI;
    }
    aF.prototype = new d();
    aF.prototype._$YS = function (aI, aH) {
        switch (this._$YP) {
            default:
            case u.Target.TARGET_FROM_ANGLE:
                aI.setParamFloat(this._$wL, this.scale * aH._$5r(), this._$V0);
                break;
            case u.Target.TARGET_FROM_ANGLE_V:
                aI.setParamFloat(this._$wL, this.scale * aH._$Cs(), this._$V0);
                break;
        }
    };
    u.Src = function () { };
    u.Src.SRC_TO_X = "SRC_TO_X";
    u.Src.SRC_TO_Y = "SRC_TO_Y";
    u.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE";
    u.Target = function () { };
    u.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE";
    u.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V";
    function X() {
        if (j) {
            return;
        }
        this._$fL = 0;
        this._$gL = 0;
        this._$B0 = 1;
        this._$z0 = 1;
        this._$qT = 0;
        this.reflectX = false;
        this.reflectY = false;
    }
    X.prototype.init = function (aH) {
        this._$fL = aH._$fL;
        this._$gL = aH._$gL;
        this._$B0 = aH._$B0;
        this._$z0 = aH._$z0;
        this._$qT = aH._$qT;
        this.reflectX = aH.reflectX;
        this.reflectY = aH.reflectY;
    };
    X.prototype._$F0 = function (aH) {
        this._$fL = aH._$_T();
        this._$gL = aH._$_T();
        this._$B0 = aH._$_T();
        this._$z0 = aH._$_T();
        this._$qT = aH._$_T();
        if (aH.getFormatVersion() >= ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2) {
            this.reflectX = aH._$po();
            this.reflectY = aH._$po();
        }
    };
    X.prototype._$e = function () { };
    var ad = function () { };
    ad._$ni = function (aL, aJ, aR, aQ, aK, aI, aH, aS, aN) {
        var aM = aH * aI - aS * aK;
        if (aM == 0) {
            return null;
        } else {
            var aO = ((aL - aR) * aI - (aJ - aQ) * aK) / aM;
            var aP;
            if (aK != 0) {
                aP = (aL - aR - aO * aH) / aK;
            } else {
                aP = (aJ - aQ - aO * aS) / aI;
            }
            if (isNaN(aP)) {
                aP = (aL - aR - aO * aH) / aK;
                if (isNaN(aP)) {
                    aP = (aJ - aQ - aO * aS) / aI;
                }
                if (isNaN(aP)) {
                    console.log("a is NaN @UtVector#_$ni() ");
                    console.log("v1x : " + aK);
                    console.log("v1x != 0 ? " + (aK != 0));
                }
            }
            if (aN == null) {
                return new Array(aP, aO);
            } else {
                aN[0] = aP;
                aN[1] = aO;
                return aN;
            }
        }
    };
    function av() {
        if (j) {
            return;
        }
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
    }
    av.prototype._$8P = function () {
        return this.x + 0.5 * this.width;
    };
    av.prototype._$6P = function () {
        return this.y + 0.5 * this.height;
    };
    av.prototype._$EL = function () {
        return this.x + this.width;
    };
    av.prototype._$5T = function () {
        return this.y + this.height;
    };
    av.prototype._$jL = function (aI, aK, aJ, aH) {
        this.x = aI;
        this.y = aK;
        this.width = aJ;
        this.height = aH;
    };
    av.prototype._$jL = function (aH) {
        this.x = aH.x;
        this.y = aH.y;
        this.width = aH.width;
        this.height = aH.height;
    };
    av.prototype.contains = function (aH, aI) {
        return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height;
    };
    av.prototype.expand = function (aH, aI) {
        this.x -= aH;
        this.y -= aI;
        this.width += aH * 2;
        this.height += aI * 2;
    };
    function aG() { }
    aG._$Z2 = function (bb, bo, bp, a2) {
        var a1 = bo._$Q2(bb, bp);
        var a3 = bb._$vs();
        var ba = bb._$Tr();
        bo._$zr(a3, ba, a1);
        if (a1 <= 0) {
            return a2[a3[0]];
        } else {
            if (a1 == 1) {
                var bj = a2[a3[0]];
                var bi = a2[a3[1]];
                var a9 = ba[0];
                return (bj + (bi - bj) * a9) | 0;
            } else {
                if (a1 == 2) {
                    var bj = a2[a3[0]];
                    var bi = a2[a3[1]];
                    var a0 = a2[a3[2]];
                    var aZ = a2[a3[3]];
                    var a9 = ba[0];
                    var a8 = ba[1];
                    var br = (bj + (bi - bj) * a9) | 0;
                    var bq = (a0 + (aZ - a0) * a9) | 0;
                    return (br + (bq - br) * a8) | 0;
                } else {
                    if (a1 == 3) {
                        var aP = a2[a3[0]];
                        var aO = a2[a3[1]];
                        var bn = a2[a3[2]];
                        var bm = a2[a3[3]];
                        var aK = a2[a3[4]];
                        var aJ = a2[a3[5]];
                        var bg = a2[a3[6]];
                        var bf = a2[a3[7]];
                        var a9 = ba[0];
                        var a8 = ba[1];
                        var a6 = ba[2];
                        var bj = (aP + (aO - aP) * a9) | 0;
                        var bi = (bn + (bm - bn) * a9) | 0;
                        var a0 = (aK + (aJ - aK) * a9) | 0;
                        var aZ = (bg + (bf - bg) * a9) | 0;
                        var br = (bj + (bi - bj) * a8) | 0;
                        var bq = (a0 + (aZ - a0) * a8) | 0;
                        return (br + (bq - br) * a6) | 0;
                    } else {
                        if (a1 == 4) {
                            var aT = a2[a3[0]];
                            var aS = a2[a3[1]];
                            var bu = a2[a3[2]];
                            var bt = a2[a3[3]];
                            var aN = a2[a3[4]];
                            var aM = a2[a3[5]];
                            var bl = a2[a3[6]];
                            var bk = a2[a3[7]];
                            var be = a2[a3[8]];
                            var bc = a2[a3[9]];
                            var aX = a2[a3[10]];
                            var aW = a2[a3[11]];
                            var a7 = a2[a3[12]];
                            var a5 = a2[a3[13]];
                            var aR = a2[a3[14]];
                            var aQ = a2[a3[15]];
                            var a9 = ba[0];
                            var a8 = ba[1];
                            var a6 = ba[2];
                            var a4 = ba[3];
                            var aP = (aT + (aS - aT) * a9) | 0;
                            var aO = (bu + (bt - bu) * a9) | 0;
                            var bn = (aN + (aM - aN) * a9) | 0;
                            var bm = (bl + (bk - bl) * a9) | 0;
                            var aK = (be + (bc - be) * a9) | 0;
                            var aJ = (aX + (aW - aX) * a9) | 0;
                            var bg = (a7 + (a5 - a7) * a9) | 0;
                            var bf = (aR + (aQ - aR) * a9) | 0;
                            var bj = (aP + (aO - aP) * a8) | 0;
                            var bi = (bn + (bm - bn) * a8) | 0;
                            var a0 = (aK + (aJ - aK) * a8) | 0;
                            var aZ = (bg + (bf - bg) * a8) | 0;
                            var br = (bj + (bi - bj) * a6) | 0;
                            var bq = (a0 + (aZ - a0) * a6) | 0;
                            return (br + (bq - br) * a4) | 0;
                        } else {
                            var aV = 1 << a1;
                            var aY = new Float32Array(aV);
                            for (var bh = 0; bh < aV; bh++) {
                                var aI = bh;
                                var aH = 1;
                                for (var aL = 0; aL < a1; aL++) {
                                    aH *= aI % 2 == 0 ? 1 - ba[aL] : ba[aL];
                                    aI /= 2;
                                }
                                aY[bh] = aH;
                            }
                            var bs = new Float32Array(aV);
                            for (var aU = 0; aU < aV; aU++) {
                                bs[aU] = a2[a3[aU]];
                            }
                            var bd = 0;
                            for (var aU = 0; aU < aV; aU++) {
                                bd += aY[aU] * bs[aU];
                            }
                            return (bd + 0.5) | 0;
                        }
                    }
                }
            }
        }
    };
    aG._$br = function (ba, bo, bp, bg) {
        var a1 = bo._$Q2(ba, bp);
        var a2 = ba._$vs();
        var a9 = ba._$Tr();
        bo._$zr(a2, a9, a1);
        if (a1 <= 0) {
            return bg[a2[0]];
        } else {
            if (a1 == 1) {
                var bj = bg[a2[0]];
                var bi = bg[a2[1]];
                var a8 = a9[0];
                return bj + (bi - bj) * a8;
            } else {
                if (a1 == 2) {
                    var bj = bg[a2[0]];
                    var bi = bg[a2[1]];
                    var a0 = bg[a2[2]];
                    var aZ = bg[a2[3]];
                    var a8 = a9[0];
                    var a7 = a9[1];
                    return (1 - a7) * (bj + (bi - bj) * a8) + a7 * (a0 + (aZ - a0) * a8);
                } else {
                    if (a1 == 3) {
                        var aP = bg[a2[0]];
                        var aO = bg[a2[1]];
                        var bn = bg[a2[2]];
                        var bm = bg[a2[3]];
                        var aK = bg[a2[4]];
                        var aJ = bg[a2[5]];
                        var bf = bg[a2[6]];
                        var be = bg[a2[7]];
                        var a8 = a9[0];
                        var a7 = a9[1];
                        var a5 = a9[2];
                        return (1 - a5) * ((1 - a7) * (aP + (aO - aP) * a8) + a7 * (bn + (bm - bn) * a8)) + a5 * ((1 - a7) * (aK + (aJ - aK) * a8) + a7 * (bf + (be - bf) * a8));
                    } else {
                        if (a1 == 4) {
                            var aT = bg[a2[0]];
                            var aS = bg[a2[1]];
                            var bs = bg[a2[2]];
                            var br = bg[a2[3]];
                            var aN = bg[a2[4]];
                            var aM = bg[a2[5]];
                            var bl = bg[a2[6]];
                            var bk = bg[a2[7]];
                            var bd = bg[a2[8]];
                            var bb = bg[a2[9]];
                            var aX = bg[a2[10]];
                            var aW = bg[a2[11]];
                            var a6 = bg[a2[12]];
                            var a4 = bg[a2[13]];
                            var aR = bg[a2[14]];
                            var aQ = bg[a2[15]];
                            var a8 = a9[0];
                            var a7 = a9[1];
                            var a5 = a9[2];
                            var a3 = a9[3];
                            return (
                                (1 - a3) * ((1 - a5) * ((1 - a7) * (aT + (aS - aT) * a8) + a7 * (bs + (br - bs) * a8)) + a5 * ((1 - a7) * (aN + (aM - aN) * a8) + a7 * (bl + (bk - bl) * a8))) +
                                a3 * ((1 - a5) * ((1 - a7) * (bd + (bb - bd) * a8) + a7 * (aX + (aW - aX) * a8)) + a5 * ((1 - a7) * (a6 + (a4 - a6) * a8) + a7 * (aR + (aQ - aR) * a8)))
                            );
                        } else {
                            var aV = 1 << a1;
                            var aY = new Float32Array(aV);
                            for (var bh = 0; bh < aV; bh++) {
                                var aI = bh;
                                var aH = 1;
                                for (var aL = 0; aL < a1; aL++) {
                                    aH *= aI % 2 == 0 ? 1 - a9[aL] : a9[aL];
                                    aI /= 2;
                                }
                                aY[bh] = aH;
                            }
                            var bq = new Float32Array(aV);
                            for (var aU = 0; aU < aV; aU++) {
                                bq[aU] = bg[a2[aU]];
                            }
                            var bc = 0;
                            for (var aU = 0; aU < aV; aU++) {
                                bc += aY[aU] * bq[aU];
                            }
                            return bc;
                        }
                    }
                }
            }
        }
    };
    aG._$Vr = function (bV, bW, a5, aI, bC, a3, bX, bH) {
        var aN = bW._$Q2(bV, a5);
        var bw = bV._$vs();
        var a2 = bV._$Tr();
        bW._$zr(bw, a2, aN);
        var aJ = aI * 2;
        var aQ = bX;
        if (aN <= 0) {
            var bI = bw[0];
            var bq = bC[bI];
            if (bH == 2 && bX == 0) {
                P._$jT(bq, 0, a3, 0, aJ);
            } else {
                for (var bt = 0; bt < aJ;) {
                    a3[aQ] = bq[bt++];
                    a3[aQ + 1] = bq[bt++];
                    aQ += bH;
                }
            }
        } else {
            if (aN == 1) {
                var bq = bC[bw[0]];
                var bp = bC[bw[1]];
                var b3 = a2[0];
                var bT = 1 - b3;
                for (var bt = 0; bt < aJ;) {
                    a3[aQ] = bq[bt] * bT + bp[bt] * b3;
                    ++bt;
                    a3[aQ + 1] = bq[bt] * bT + bp[bt] * b3;
                    ++bt;
                    aQ += bH;
                }
            } else {
                if (aN == 2) {
                    var bq = bC[bw[0]];
                    var bp = bC[bw[1]];
                    var aZ = bC[bw[2]];
                    var aY = bC[bw[3]];
                    var b3 = a2[0];
                    var b1 = a2[1];
                    var bT = 1 - b3;
                    var bP = 1 - b1;
                    var b2 = bP * bT;
                    var b0 = bP * b3;
                    var bM = b1 * bT;
                    var bL = b1 * b3;
                    for (var bt = 0; bt < aJ;) {
                        a3[aQ] = b2 * bq[bt] + b0 * bp[bt] + bM * aZ[bt] + bL * aY[bt];
                        ++bt;
                        a3[aQ + 1] = b2 * bq[bt] + b0 * bp[bt] + bM * aZ[bt] + bL * aY[bt];
                        ++bt;
                        aQ += bH;
                    }
                } else {
                    if (aN == 3) {
                        var ba = bC[bw[0]];
                        var a9 = bC[bw[1]];
                        var aP = bC[bw[2]];
                        var aO = bC[bw[3]];
                        var a6 = bC[bw[4]];
                        var a4 = bC[bw[5]];
                        var aL = bC[bw[6]];
                        var aK = bC[bw[7]];
                        var b3 = a2[0];
                        var b1 = a2[1];
                        var bZ = a2[2];
                        var bT = 1 - b3;
                        var bP = 1 - b1;
                        var bN = 1 - bZ;
                        var b8 = bN * bP * bT;
                        var b7 = bN * bP * b3;
                        var bU = bN * b1 * bT;
                        var bS = bN * b1 * b3;
                        var b6 = bZ * bP * bT;
                        var b5 = bZ * bP * b3;
                        var bQ = bZ * b1 * bT;
                        var bO = bZ * b1 * b3;
                        for (var bt = 0; bt < aJ;) {
                            a3[aQ] = b8 * ba[bt] + b7 * a9[bt] + bU * aP[bt] + bS * aO[bt] + b6 * a6[bt] + b5 * a4[bt] + bQ * aL[bt] + bO * aK[bt];
                            ++bt;
                            a3[aQ + 1] = b8 * ba[bt] + b7 * a9[bt] + bU * aP[bt] + bS * aO[bt] + b6 * a6[bt] + b5 * a4[bt] + bQ * aL[bt] + bO * aK[bt];
                            ++bt;
                            aQ += bH;
                        }
                    } else {
                        if (aN == 4) {
                            var bD = bC[bw[0]];
                            var bB = bC[bw[1]];
                            var bo = bC[bw[2]];
                            var bm = bC[bw[3]];
                            var by = bC[bw[4]];
                            var bx = bC[bw[5]];
                            var be = bC[bw[6]];
                            var bd = bC[bw[7]];
                            var bG = bC[bw[8]];
                            var bE = bC[bw[9]];
                            var bv = bC[bw[10]];
                            var bu = bC[bw[11]];
                            var bA = bC[bw[12]];
                            var bz = bC[bw[13]];
                            var bn = bC[bw[14]];
                            var bl = bC[bw[15]];
                            var b3 = a2[0];
                            var b1 = a2[1];
                            var bZ = a2[2];
                            var bY = a2[3];
                            var bT = 1 - b3;
                            var bP = 1 - b1;
                            var bN = 1 - bZ;
                            var bK = 1 - bY;
                            var bk = bK * bN * bP * bT;
                            var bi = bK * bN * bP * b3;
                            var aW = bK * bN * b1 * bT;
                            var aV = bK * bN * b1 * b3;
                            var bc = bK * bZ * bP * bT;
                            var bb = bK * bZ * bP * b3;
                            var aS = bK * bZ * b1 * bT;
                            var aR = bK * bZ * b1 * b3;
                            var bs = bY * bN * bP * bT;
                            var br = bY * bN * bP * b3;
                            var a1 = bY * bN * b1 * bT;
                            var a0 = bY * bN * b1 * b3;
                            var bh = bY * bZ * bP * bT;
                            var bf = bY * bZ * bP * b3;
                            var aU = bY * bZ * b1 * bT;
                            var aT = bY * bZ * b1 * b3;
                            for (var bt = 0; bt < aJ;) {
                                a3[aQ] =
                                    bk * bD[bt] +
                                    bi * bB[bt] +
                                    aW * bo[bt] +
                                    aV * bm[bt] +
                                    bc * by[bt] +
                                    bb * bx[bt] +
                                    aS * be[bt] +
                                    aR * bd[bt] +
                                    bs * bG[bt] +
                                    br * bE[bt] +
                                    a1 * bv[bt] +
                                    a0 * bu[bt] +
                                    bh * bA[bt] +
                                    bf * bz[bt] +
                                    aU * bn[bt] +
                                    aT * bl[bt];
                                ++bt;
                                a3[aQ + 1] =
                                    bk * bD[bt] +
                                    bi * bB[bt] +
                                    aW * bo[bt] +
                                    aV * bm[bt] +
                                    bc * by[bt] +
                                    bb * bx[bt] +
                                    aS * be[bt] +
                                    aR * bd[bt] +
                                    bs * bG[bt] +
                                    br * bE[bt] +
                                    a1 * bv[bt] +
                                    a0 * bu[bt] +
                                    bh * bA[bt] +
                                    bf * bz[bt] +
                                    aU * bn[bt] +
                                    aT * bl[bt];
                                ++bt;
                                aQ += bH;
                            }
                        } else {
                            var b4 = 1 << aN;
                            var bJ = new Float32Array(b4);
                            for (var bj = 0; bj < b4; bj++) {
                                var aH = bj;
                                var aM = 1;
                                for (var bF = 0; bF < aN; bF++) {
                                    aM *= aH % 2 == 0 ? 1 - a2[bF] : a2[bF];
                                    aH /= 2;
                                }
                                bJ[bj] = aM;
                            }
                            var bg = new Float32Array(b4);
                            for (var aX = 0; aX < b4; aX++) {
                                bg[aX] = bC[bw[aX]];
                            }
                            for (var bt = 0; bt < aJ;) {
                                var a8 = 0,
                                    a7 = 0;
                                var bR = bt + 1;
                                for (var aX = 0; aX < b4; aX++) {
                                    a8 += bJ[aX] * bg[aX][bt];
                                    a7 += bJ[aX] * bg[aX][bR];
                                }
                                bt += 2;
                                a3[aQ] = a8;
                                a3[aQ + 1] = a7;
                                aQ += bH;
                            }
                        }
                    }
                }
            }
        }
    };
    function e() {
        if (j) {
            return;
        }
        this.x = null;
        this.y = null;
    }
    e.prototype._$HT = function (aH, aI) {
        this.x = aH;
        this.y = aI;
    };
    e.prototype._$HT = function (aH) {
        this.x = aH.x;
        this.y = aH.y;
    };
    function ae() {
        if (j) {
            return;
        }
        this._$gP = null;
        this._$dr = null;
        this._$GS = null;
        this._$qb = null;
        this._$Lb = null;
        this._$mS = null;
        this.clipID = null;
        this.clipIDList = new Array();
    }
    ae._$ur = -2;
    ae._$ES = 500;
    ae._$wb = 2;
    ae._$8S = 3;
    ae._$52 = ae._$ES;
    ae._$R2 = ae._$ES;
    ae._$or = function () {
        return ae._$52;
    };
    ae._$Pr = function () {
        return ae._$R2;
    };
    ae.prototype.convertClipIDForV2_11 = function (aI) {
        var aH = [];
        if (aI == null) {
            return null;
        }
        if (aI.length == 0) {
            return null;
        }
        if (!/,/.test(aI)) {
            aH.push(aI.id);
            return aH;
        }
        aH = aI.id.split(",");
        return aH;
    };
    ae.prototype._$F0 = function (aH) {
        this._$gP = aH._$nP();
        this._$dr = aH._$nP();
        this._$GS = aH._$nP();
        this._$qb = aH._$6L();
        this._$Lb = aH._$cS();
        this._$mS = aH._$Tb();
        if (aH.getFormatVersion() >= ay._$T7) {
            this.clipID = aH._$nP();
            this.clipIDList = this.convertClipIDForV2_11(this.clipID);
        } else {
            this.clipIDList = [];
        }
        this._$MS(this._$Lb);
    };
    ae.prototype.getClipIDList = function () {
        return this.clipIDList;
    };
    ae.prototype.init = function (aH) { };
    ae.prototype._$Nr = function (aH, aI) {
        aI._$IS[0] = false;
        aI._$Us = aG._$Z2(aH, this._$GS, aI._$IS, this._$Lb);
        if (Q._$Zs) {
        } else {
            if (aI._$IS[0]) {
                return;
            }
        }
        aI._$7s = aG._$br(aH, this._$GS, aI._$IS, this._$mS);
    };
    ae.prototype._$2b = function (aH, aI) { };
    ae.prototype.getDrawDataID = function () {
        return this._$gP;
    };
    ae.prototype._$j2 = function (aH) {
        this._$gP = aH;
    };
    ae.prototype.getOpacity = function (aH, aI) {
        return aI._$7s;
    };
    ae.prototype._$zS = function (aH, aI) {
        return aI._$Us;
    };
    ae.prototype._$MS = function (aJ) {
        for (var aI = aJ.length - 1; aI >= 0; --aI) {
            var aH = aJ[aI];
            if (aH < ae._$52) {
                ae._$52 = aH;
            } else {
                if (aH > ae._$R2) {
                    ae._$R2 = aH;
                }
            }
        }
    };
    ae.prototype.getTargetBaseDataID = function () {
        return this._$dr;
    };
    ae.prototype._$gs = function (aH) {
        this._$dr = aH;
    };
    ae.prototype._$32 = function () {
        return this._$dr != null && this._$dr != n._$2o();
    };
    ae.prototype.preDraw = function (aJ, aH, aI) { };
    ae.prototype.draw = function (aJ, aH, aI) { };
    ae.prototype.getType = function () { };
    ae.prototype._$B2 = function (aI, aH, aJ) { };
    function ax() {
        if (j) {
            return;
        }
        this._$Eb = ax._$ps;
        this._$lT = 1;
        this._$C0 = 1;
        this._$tT = 1;
        this._$WL = 1;
        this.culling = false;
        this.matrix4x4 = new Float32Array(16);
        this.premultipliedAlpha = false;
        this.anisotropy = 0;
        this.clippingProcess = ax.CLIPPING_PROCESS_NONE;
        this.clipBufPre_clipContextMask = null;
        this.clipBufPre_clipContextDraw = null;
        this.CHANNEL_COLORS = new Array();
    }
    ax._$ps = 32;
    ax.CLIPPING_PROCESS_NONE = 0;
    ax.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1;
    ax.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2;
    ax.CLIPPING_PROCESS_DRAW = 3;
    ax.CLIPPING_PROCESS_CLEAR_ALPHA = 4;
    ax.prototype.setChannelFlagAsColor = function (aH, aI) {
        this.CHANNEL_COLORS[aH] = aI;
    };
    ax.prototype.getChannelFlagAsColor = function (aH) {
        return this.CHANNEL_COLORS[aH];
    };
    ax.prototype._$ZT = function () { };
    ax.prototype._$Uo = function (aM, aK, aJ, aL, aN, aI, aH) { };
    ax.prototype._$Rs = function () {
        return -1;
    };
    ax.prototype._$Ds = function (aH) { };
    ax.prototype.setBaseColor = function (aK, aJ, aI, aH) {
        if (aK < 0) {
            aK = 0;
        } else {
            if (aK > 1) {
                aK = 1;
            }
        }
        if (aJ < 0) {
            aJ = 0;
        } else {
            if (aJ > 1) {
                aJ = 1;
            }
        }
        if (aI < 0) {
            aI = 0;
        } else {
            if (aI > 1) {
                aI = 1;
            }
        }
        if (aH < 0) {
            aH = 0;
        } else {
            if (aH > 1) {
                aH = 1;
            }
        }
        this._$lT = aK;
        this._$C0 = aJ;
        this._$tT = aI;
        this._$WL = aH;
    };
    ax.prototype._$WP = function (aH) {
        this.culling = aH;
    };
    ax.prototype.setMatrix = function (aH) {
        for (var aI = 0; aI < 16; aI++) {
            this.matrix4x4[aI] = aH[aI];
        }
    };
    ax.prototype._$IT = function () {
        return this.matrix4x4;
    };
    ax.prototype.setPremultipliedAlpha = function (aH) {
        this.premultipliedAlpha = aH;
    };
    ax.prototype.isPremultipliedAlpha = function () {
        return this.premultipliedAlpha;
    };
    ax.prototype.setAnisotropy = function (aH) {
        this.anisotropy = aH;
    };
    ax.prototype.getAnisotropy = function () {
        return this.anisotropy;
    };
    ax.prototype.getClippingProcess = function () {
        return this.clippingProcess;
    };
    ax.prototype.setClippingProcess = function (aH) {
        this.clippingProcess = aH;
    };
    ax.prototype.setClipBufPre_clipContextForMask = function (aH) {
        this.clipBufPre_clipContextMask = aH;
    };
    ax.prototype.getClipBufPre_clipContextMask = function () {
        return this.clipBufPre_clipContextMask;
    };
    ax.prototype.setClipBufPre_clipContextForDraw = function (aH) {
        this.clipBufPre_clipContextDraw = aH;
    };
    ax.prototype.getClipBufPre_clipContextDraw = function () {
        return this.clipBufPre_clipContextDraw;
    };
    function o() {
        if (j) {
            return;
        }
        this.a = 1;
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.scale = 1;
        this._$ho = 1;
        this.blendMode = Q.L2D_COLOR_BLEND_MODE_MULT;
    }
    function c() {
        if (j) {
            return;
        }
        this._$kP = null;
        this._$dr = null;
        this._$Ai = true;
        this._$mS = null;
    }
    c._$ur = -2;
    c._$c2 = 1;
    c._$_b = 2;
    c.prototype._$F0 = function (aH) {
        this._$kP = aH._$nP();
        this._$dr = aH._$nP();
    };
    c.prototype.readV2_opacity = function (aH) {
        if (aH.getFormatVersion() >= ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2) {
            this._$mS = aH._$Tb();
        }
    };
    c.prototype.init = function (aH) { };
    c.prototype._$Nr = function (aI, aH) { };
    c.prototype.interpolateOpacity = function (aJ, aK, aI, aH) {
        if (this._$mS == null) {
            aI.setInterpolatedOpacity(1);
        } else {
            aI.setInterpolatedOpacity(aG._$br(aJ, aK, aH, this._$mS));
        }
    };
    c.prototype._$2b = function (aI, aH) { };
    c.prototype._$nb = function (aL, aK, aM, aH, aI, aJ, aN) { };
    c.prototype.getType = function () { };
    c.prototype._$gs = function (aH) {
        this._$dr = aH;
    };
    c.prototype._$a2 = function (aH) {
        this._$kP = aH;
    };
    c.prototype.getTargetBaseDataID = function () {
        return this._$dr;
    };
    c.prototype.getBaseDataID = function () {
        return this._$kP;
    };
    c.prototype._$32 = function () {
        return this._$dr != null && this._$dr != n._$2o();
    };
    function P() { }
    P._$W2 = 0;
    P._$CS = P._$W2;
    P._$Mo = function () {
        return true;
    };
    P._$XP = function (aI) {
        try {
            var aJ = getTimeMSec();
            while (getTimeMSec() - aJ < aI) { }
        } catch (aH) {
            aH._$Rb();
        }
    };
    P.getUserTimeMSec = function () {
        return P._$CS == P._$W2 ? P.getSystemTimeMSec() : P._$CS;
    };
    P.setUserTimeMSec = function (aH) {
        P._$CS = aH;
    };
    P.updateUserTimeMSec = function () {
        return (P._$CS = P.getSystemTimeMSec());
    };
    P.getTimeMSec = function () {
        return new Date().getTime();
    };
    P.getSystemTimeMSec = function () {
        return new Date().getTime();
    };
    P._$Q = function (aH) { };
    P._$jT = function (aM, aJ, aI, aL, aH) {
        for (var aK = 0; aK < aH; aK++) {
            aI[aL + aK] = aM[aJ + aK];
        }
    };
    function aA() {
        if (j) {
            return;
        }
        this._$VP = 0;
        this._$wL = null;
        this._$GP = null;
        this._$8o = aA._$ds;
        this._$2r = -1;
        this._$O2 = 0;
        this._$ri = 0;
    }
    aA._$ds = -2;
    aA.prototype._$F0 = function (aH) {
        this._$wL = aH._$nP();
        this._$VP = aH._$6L();
        this._$GP = aH._$nP();
    };
    aA.prototype.getParamIndex = function (aH) {
        if (this._$2r != aH) {
            this._$8o = aA._$ds;
        }
        return this._$8o;
    };
    aA.prototype._$Pb = function (aI, aH) {
        this._$8o = aI;
        this._$2r = aH;
    };
    aA.prototype.getParamID = function () {
        return this._$wL;
    };
    aA.prototype._$yP = function (aH) {
        this._$wL = aH;
    };
    aA.prototype._$N2 = function () {
        return this._$VP;
    };
    aA.prototype._$d2 = function () {
        return this._$GP;
    };
    aA.prototype._$t2 = function (aI, aH) {
        this._$VP = aI;
        this._$GP = aH;
    };
    aA.prototype._$Lr = function () {
        return this._$O2;
    };
    aA.prototype._$wr = function (aH) {
        this._$O2 = aH;
    };
    aA.prototype._$SL = function () {
        return this._$ri;
    };
    aA.prototype._$AL = function (aH) {
        this._$ri = aH;
    };
    function G() { }
    G.startsWith = function (aJ, aL, aK) {
        var aH = aL + aK.length;
        if (aH >= aJ.length) {
            return false;
        }
        for (var aI = aL; aI < aH; aI++) {
            if (G.getChar(aJ, aI) != aK.charAt(aI - aL)) {
                return false;
            }
        }
        return true;
    };
    G.getChar = function (aI, aH) {
        return String.fromCharCode(aI.getUint8(aH));
    };
    G.createString = function (aM, aL, aJ) {
        var aH = new ArrayBuffer(aJ * 2);
        var aK = new Uint16Array(aH);
        for (var aI = 0; aI < aJ; aI++) {
            aK[aI] = aM.getUint8(aL + aI);
        }
        return String.fromCharCode.apply(null, aK);
    };
    G._$LS = function (aP, aM, aR, aK) {
        if (aP instanceof ArrayBuffer) {
            aP = new DataView(aP);
        }
        var aL = aR;
        var aJ = false;
        var aQ = false;
        var aS = 0;
        var aO = G.getChar(aP, aL);
        if (aO == "-") {
            aJ = true;
            aL++;
        }
        var aN = false;
        for (; aL < aM; aL++) {
            aO = G.getChar(aP, aL);
            switch (aO) {
                case "0":
                    aS = aS * 10;
                    break;
                case "1":
                    aS = aS * 10 + 1;
                    break;
                case "2":
                    aS = aS * 10 + 2;
                    break;
                case "3":
                    aS = aS * 10 + 3;
                    break;
                case "4":
                    aS = aS * 10 + 4;
                    break;
                case "5":
                    aS = aS * 10 + 5;
                    break;
                case "6":
                    aS = aS * 10 + 6;
                    break;
                case "7":
                    aS = aS * 10 + 7;
                    break;
                case "8":
                    aS = aS * 10 + 8;
                    break;
                case "9":
                    aS = aS * 10 + 9;
                    break;
                case ".":
                    aQ = true;
                    aL++;
                    aN = true;
                    break;
                default:
                    aN = true;
                    break;
            }
            if (aN) {
                break;
            }
        }
        if (aQ) {
            var aI = 0.1;
            var aH = false;
            for (; aL < aM; aL++) {
                aO = G.getChar(aP, aL);
                switch (aO) {
                    case "0":
                        break;
                    case "1":
                        aS += aI * 1;
                        break;
                    case "2":
                        aS += aI * 2;
                        break;
                    case "3":
                        aS += aI * 3;
                        break;
                    case "4":
                        aS += aI * 4;
                        break;
                    case "5":
                        aS += aI * 5;
                        break;
                    case "6":
                        aS += aI * 6;
                        break;
                    case "7":
                        aS += aI * 7;
                        break;
                    case "8":
                        aS += aI * 8;
                        break;
                    case "9":
                        aS += aI * 9;
                        break;
                    default:
                        aH = true;
                        break;
                }
                aI *= 0.1;
                if (aH) {
                    break;
                }
            }
        }
        if (aJ) {
            aS = -aS;
        }
        aK[0] = aL;
        return aS;
    };
    function g() {
        if (j) {
            return;
        }
        this._$Ob = null;
    }
    g.prototype._$zP = function () {
        this._$Ob = new Array();
    };
    g.prototype._$F0 = function (aH) {
        this._$Ob = aH._$nP();
    };
    g.prototype._$Ur = function (aK) {
        if (aK._$WS()) {
            return true;
        }
        var aH = aK._$v2();
        for (var aJ = this._$Ob.length - 1; aJ >= 0; --aJ) {
            var aI = this._$Ob[aJ].getParamIndex(aH);
            if (aI == aA._$ds) {
                aI = aK.getParamIndex(this._$Ob[aJ].getParamID());
            }
            if (aK._$Xb(aI)) {
                return true;
            }
        }
        return false;
    };
    g.prototype._$Q2 = function (aL, aV) {
        var aX = this._$Ob.length;
        var aJ = aL._$v2();
        var aN = 0;
        var aI;
        var aQ;
        for (var aK = 0; aK < aX; aK++) {
            var aH = this._$Ob[aK];
            aI = aH.getParamIndex(aJ);
            if (aI == aA._$ds) {
                aI = aL.getParamIndex(aH.getParamID());
                aH._$Pb(aI, aJ);
            }
            if (aI < 0) {
                throw new Exception("err 23242 : " + aH.getParamID());
            }
            var aU = aI < 0 ? 0 : aL.getParamFloat(aI);
            aQ = aH._$N2();
            var aM = aH._$d2();
            var aP = -1;
            var aT = 0;
            var aS;
            var aR;
            if (aQ < 1) {
            } else {
                if (aQ == 1) {
                    aS = aM[0];
                    if (aS - aw._$J < aU && aU < aS + aw._$J) {
                        aP = 0;
                        aT = 0;
                    } else {
                        aP = 0;
                        aV[0] = true;
                    }
                } else {
                    aS = aM[0];
                    if (aU < aS - aw._$J) {
                        aP = 0;
                        aV[0] = true;
                    } else {
                        if (aU < aS + aw._$J) {
                            aP = 0;
                        } else {
                            var aW = false;
                            for (var aO = 1; aO < aQ; ++aO) {
                                aR = aM[aO];
                                if (aU < aR + aw._$J) {
                                    if (aR - aw._$J < aU) {
                                        aP = aO;
                                    } else {
                                        aP = aO - 1;
                                        aT = (aU - aS) / (aR - aS);
                                        aN++;
                                    }
                                    aW = true;
                                    break;
                                }
                                aS = aR;
                            }
                            if (!aW) {
                                aP = aQ - 1;
                                aT = 0;
                                aV[0] = true;
                            }
                        }
                    }
                }
            }
            aH._$wr(aP);
            aH._$AL(aT);
        }
        return aN;
    };
    g.prototype._$zr = function (aN, aT, aP) {
        var aR = 1 << aP;
        if (aR + 1 > aw._$Qb) {
            console.log("err 23245\n");
        }
        var aS = this._$Ob.length;
        var aK = 1;
        var aH = 1;
        var aJ = 0;
        for (var aQ = 0; aQ < aR; ++aQ) {
            aN[aQ] = 0;
        }
        for (var aL = 0; aL < aS; ++aL) {
            var aI = this._$Ob[aL];
            if (aI._$SL() == 0) {
                var aO = aI._$Lr() * aK;
                if (aO < 0 && Q._$3T) {
                    throw new Exception("err 23246");
                }
                for (var aQ = 0; aQ < aR; ++aQ) {
                    aN[aQ] += aO;
                }
            } else {
                var aO = aK * aI._$Lr();
                var aM = aK * (aI._$Lr() + 1);
                for (var aQ = 0; aQ < aR; ++aQ) {
                    aN[aQ] += ((aQ / aH) | 0) % 2 == 0 ? aO : aM;
                }
                aT[aJ++] = aI._$SL();
                aH *= 2;
            }
            aK *= aI._$N2();
        }
        aN[aR] = 65535;
        aT[aJ] = -1;
    };
    g.prototype._$h2 = function (aJ, aH, aK) {
        var aM = new Float32Array(aH);
        for (var aL = 0; aL < aH; ++aL) {
            aM[aL] = aK[aL];
        }
        var aI = new aA();
        aI._$yP(aJ);
        aI._$t2(aH, aM);
        this._$Ob.push(aI);
    };
    g.prototype._$J2 = function (aO) {
        var aN = aO;
        var aM = this._$Ob.length;
        for (var aK = 0; aK < aM; ++aK) {
            var aI = this._$Ob[aK];
            var aH = aI._$N2();
            var aJ = aN % aI._$N2();
            var aL = aI._$d2()[aJ];
            console.log("%s[%d]=%7.2f / ", aI.getParamID(), aJ, aL);
            aN /= aH;
        }
        console.log("\n");
    };
    g.prototype.getParamCount = function () {
        return this._$Ob.length;
    };
    g.prototype._$zs = function () {
        return this._$Ob;
    };
    function ac() {
        this.m = new Float32Array(16);
        this.identity();
    }
    ac.prototype.identity = function () {
        for (var aH = 0; aH < 16; aH++) {
            this.m[aH] = aH % 5 == 0 ? 1 : 0;
        }
    };
    ac.prototype.getArray = function () {
        return this.m;
    };
    ac.prototype.getCopyMatrix = function () {
        return new Float32Array(this.m);
    };
    ac.prototype.setMatrix = function (aI) {
        if (aI == null || aI.length != 16) {
            return;
        }
        for (var aH = 0; aH < 16; aH++) {
            this.m[aH] = aI[aH];
        }
    };
    ac.prototype.mult = function (aH, aJ, aI) {
        if (aJ == null) {
            return null;
        }
        if (this == aJ) {
            this.mult_safe(this.m, aH.m, aJ.m, aI);
        } else {
            this.mult_fast(this.m, aH.m, aJ.m, aI);
        }
        return aJ;
    };
    ac.prototype.mult_safe = function (aI, aH, aM, aJ) {
        if (aI == aM) {
            var aL = new Array(16);
            this.mult_fast(aI, aH, aL, aJ);
            for (var aK = 15; aK >= 0; --aK) {
                aM[aK] = aL[aK];
            }
        } else {
            this.mult_fast(aI, aH, aM, aJ);
        }
    };
    ac.prototype.mult_fast = function (aI, aH, aK, aJ) {
        if (aJ) {
            aK[0] = aI[0] * aH[0] + aI[4] * aH[1] + aI[8] * aH[2];
            aK[4] = aI[0] * aH[4] + aI[4] * aH[5] + aI[8] * aH[6];
            aK[8] = aI[0] * aH[8] + aI[4] * aH[9] + aI[8] * aH[10];
            aK[12] = aI[0] * aH[12] + aI[4] * aH[13] + aI[8] * aH[14] + aI[12];
            aK[1] = aI[1] * aH[0] + aI[5] * aH[1] + aI[9] * aH[2];
            aK[5] = aI[1] * aH[4] + aI[5] * aH[5] + aI[9] * aH[6];
            aK[9] = aI[1] * aH[8] + aI[5] * aH[9] + aI[9] * aH[10];
            aK[13] = aI[1] * aH[12] + aI[5] * aH[13] + aI[9] * aH[14] + aI[13];
            aK[2] = aI[2] * aH[0] + aI[6] * aH[1] + aI[10] * aH[2];
            aK[6] = aI[2] * aH[4] + aI[6] * aH[5] + aI[10] * aH[6];
            aK[10] = aI[2] * aH[8] + aI[6] * aH[9] + aI[10] * aH[10];
            aK[14] = aI[2] * aH[12] + aI[6] * aH[13] + aI[10] * aH[14] + aI[14];
            aK[3] = aK[7] = aK[11] = 0;
            aK[15] = 1;
        } else {
            aK[0] = aI[0] * aH[0] + aI[4] * aH[1] + aI[8] * aH[2] + aI[12] * aH[3];
            aK[4] = aI[0] * aH[4] + aI[4] * aH[5] + aI[8] * aH[6] + aI[12] * aH[7];
            aK[8] = aI[0] * aH[8] + aI[4] * aH[9] + aI[8] * aH[10] + aI[12] * aH[11];
            aK[12] = aI[0] * aH[12] + aI[4] * aH[13] + aI[8] * aH[14] + aI[12] * aH[15];
            aK[1] = aI[1] * aH[0] + aI[5] * aH[1] + aI[9] * aH[2] + aI[13] * aH[3];
            aK[5] = aI[1] * aH[4] + aI[5] * aH[5] + aI[9] * aH[6] + aI[13] * aH[7];
            aK[9] = aI[1] * aH[8] + aI[5] * aH[9] + aI[9] * aH[10] + aI[13] * aH[11];
            aK[13] = aI[1] * aH[12] + aI[5] * aH[13] + aI[9] * aH[14] + aI[13] * aH[15];
            aK[2] = aI[2] * aH[0] + aI[6] * aH[1] + aI[10] * aH[2] + aI[14] * aH[3];
            aK[6] = aI[2] * aH[4] + aI[6] * aH[5] + aI[10] * aH[6] + aI[14] * aH[7];
            aK[10] = aI[2] * aH[8] + aI[6] * aH[9] + aI[10] * aH[10] + aI[14] * aH[11];
            aK[14] = aI[2] * aH[12] + aI[6] * aH[13] + aI[10] * aH[14] + aI[14] * aH[15];
            aK[3] = aI[3] * aH[0] + aI[7] * aH[1] + aI[11] * aH[2] + aI[15] * aH[3];
            aK[7] = aI[3] * aH[4] + aI[7] * aH[5] + aI[11] * aH[6] + aI[15] * aH[7];
            aK[11] = aI[3] * aH[8] + aI[7] * aH[9] + aI[11] * aH[10] + aI[15] * aH[11];
            aK[15] = aI[3] * aH[12] + aI[7] * aH[13] + aI[11] * aH[14] + aI[15] * aH[15];
        }
    };
    ac.prototype.translate = function (aH, aJ, aI) {
        this.m[12] = this.m[0] * aH + this.m[4] * aJ + this.m[8] * aI + this.m[12];
        this.m[13] = this.m[1] * aH + this.m[5] * aJ + this.m[9] * aI + this.m[13];
        this.m[14] = this.m[2] * aH + this.m[6] * aJ + this.m[10] * aI + this.m[14];
        this.m[15] = this.m[3] * aH + this.m[7] * aJ + this.m[11] * aI + this.m[15];
    };
    ac.prototype.scale = function (aJ, aI, aH) {
        this.m[0] *= aJ;
        this.m[4] *= aI;
        this.m[8] *= aH;
        this.m[1] *= aJ;
        this.m[5] *= aI;
        this.m[9] *= aH;
        this.m[2] *= aJ;
        this.m[6] *= aI;
        this.m[10] *= aH;
        this.m[3] *= aJ;
        this.m[7] *= aI;
        this.m[11] *= aH;
    };
    ac.prototype.rotateX = function (aH) {
        var aK = aC.fcos(aH);
        var aJ = aC._$9(aH);
        var aI = this.m[4];
        this.m[4] = aI * aK + this.m[8] * aJ;
        this.m[8] = aI * -aJ + this.m[8] * aK;
        aI = this.m[5];
        this.m[5] = aI * aK + this.m[9] * aJ;
        this.m[9] = aI * -aJ + this.m[9] * aK;
        aI = this.m[6];
        this.m[6] = aI * aK + this.m[10] * aJ;
        this.m[10] = aI * -aJ + this.m[10] * aK;
        aI = this.m[7];
        this.m[7] = aI * aK + this.m[11] * aJ;
        this.m[11] = aI * -aJ + this.m[11] * aK;
    };
    ac.prototype.rotateY = function (aH) {
        var aK = aC.fcos(aH);
        var aJ = aC._$9(aH);
        var aI = this.m[0];
        this.m[0] = aI * aK + this.m[8] * -aJ;
        this.m[8] = aI * aJ + this.m[8] * aK;
        aI = this.m[1];
        this.m[1] = aI * aK + this.m[9] * -aJ;
        this.m[9] = aI * aJ + this.m[9] * aK;
        aI = m[2];
        this.m[2] = aI * aK + this.m[10] * -aJ;
        this.m[10] = aI * aJ + this.m[10] * aK;
        aI = m[3];
        this.m[3] = aI * aK + this.m[11] * -aJ;
        this.m[11] = aI * aJ + this.m[11] * aK;
    };
    ac.prototype.rotateZ = function (aH) {
        var aK = aC.fcos(aH);
        var aJ = aC._$9(aH);
        var aI = this.m[0];
        this.m[0] = aI * aK + this.m[4] * aJ;
        this.m[4] = aI * -aJ + this.m[4] * aK;
        aI = this.m[1];
        this.m[1] = aI * aK + this.m[5] * aJ;
        this.m[5] = aI * -aJ + this.m[5] * aK;
        aI = this.m[2];
        this.m[2] = aI * aK + this.m[6] * aJ;
        this.m[6] = aI * -aJ + this.m[6] * aK;
        aI = this.m[3];
        this.m[3] = aI * aK + this.m[7] * aJ;
        this.m[7] = aI * -aJ + this.m[7] * aK;
    };
    function Z(aH) {
        if (j) {
            return;
        }
        ak.prototype.constructor.call(this, aH);
    }
    Z.prototype = new ak();
    Z._$tP = new Object();
    Z._$27 = function () {
        Z._$tP.clear();
    };
    Z.getID = function (aH) {
        var aI = Z._$tP[aH];
        if (aI == null) {
            aI = new Z(aH);
            Z._$tP[aH] = aI;
        }
        return aI;
    };
    Z.prototype._$3s = function () {
        return new Z();
    };
    function aD() {
        if (j) {
            return;
        }
        this._$7 = 1;
        this._$f = 0;
        this._$H = 0;
        this._$g = 1;
        this._$k = 0;
        this._$w = 0;
        this._$hi = STATE_IDENTITY;
        this._$Z = _$pS;
    }
    aD._$kS = -1;
    aD._$pS = 0;
    aD._$hb = 1;
    aD.STATE_IDENTITY = 0;
    aD._$gb = 1;
    aD._$fo = 2;
    aD._$go = 4;
    aD.prototype.transform = function (aK, aI, aH) {
        var aT, aS, aR, aM, aL, aJ;
        var aQ = 0;
        var aN = 0;
        switch (this._$hi) {
            default:
                return;
            case aD._$go | aD._$fo | aD._$gb:
                aT = this._$7;
                aS = this._$H;
                aR = this._$k;
                aM = this._$f;
                aL = this._$g;
                aJ = this._$w;
                while (--aH >= 0) {
                    var aP = aK[aQ++];
                    var aO = aK[aQ++];
                    aI[aN++] = aT * aP + aS * aO + aR;
                    aI[aN++] = aM * aP + aL * aO + aJ;
                }
                return;
            case aD._$go | aD._$fo:
                aT = this._$7;
                aS = this._$H;
                aM = this._$f;
                aL = this._$g;
                while (--aH >= 0) {
                    var aP = aK[aQ++];
                    var aO = aK[aQ++];
                    aI[aN++] = aT * aP + aS * aO;
                    aI[aN++] = aM * aP + aL * aO;
                }
                return;
            case aD._$go | aD._$gb:
                aS = this._$H;
                aR = this._$k;
                aM = this._$f;
                aJ = this._$w;
                while (--aH >= 0) {
                    var aP = aK[aQ++];
                    aI[aN++] = aS * aK[aQ++] + aR;
                    aI[aN++] = aM * aP + aJ;
                }
                return;
            case aD._$go:
                aS = this._$H;
                aM = this._$f;
                while (--aH >= 0) {
                    var aP = aK[aQ++];
                    aI[aN++] = aS * aK[aQ++];
                    aI[aN++] = aM * aP;
                }
                return;
            case aD._$fo | aD._$gb:
                aT = this._$7;
                aR = this._$k;
                aL = this._$g;
                aJ = this._$w;
                while (--aH >= 0) {
                    aI[aN++] = aT * aK[aQ++] + aR;
                    aI[aN++] = aL * aK[aQ++] + aJ;
                }
                return;
            case aD._$fo:
                aT = this._$7;
                aL = this._$g;
                while (--aH >= 0) {
                    aI[aN++] = aT * aK[aQ++];
                    aI[aN++] = aL * aK[aQ++];
                }
                return;
            case aD._$gb:
                aR = this._$k;
                aJ = this._$w;
                while (--aH >= 0) {
                    aI[aN++] = aK[aQ++] + aR;
                    aI[aN++] = aK[aQ++] + aJ;
                }
                return;
            case aD.STATE_IDENTITY:
                if (aK != aI || aQ != aN) {
                    P._$jT(aK, aQ, aI, aN, aH * 2);
                }
                return;
        }
    };
    aD.prototype.update = function () {
        if (this._$H == 0 && this._$f == 0) {
            if (this._$7 == 1 && this._$g == 1) {
                if (this._$k == 0 && this._$w == 0) {
                    this._$hi = aD.STATE_IDENTITY;
                    this._$Z = aD._$pS;
                } else {
                    this._$hi = aD._$gb;
                    this._$Z = aD._$hb;
                }
            } else {
                if (this._$k == 0 && this._$w == 0) {
                    this._$hi = aD._$fo;
                    this._$Z = aD._$kS;
                } else {
                    this._$hi = aD._$fo | aD._$gb;
                    this._$Z = aD._$kS;
                }
            }
        } else {
            if (this._$7 == 0 && this._$g == 0) {
                if (this._$k == 0 && this._$w == 0) {
                    this._$hi = aD._$go;
                    this._$Z = aD._$kS;
                } else {
                    this._$hi = aD._$go | aD._$gb;
                    this._$Z = aD._$kS;
                }
            } else {
                if (this._$k == 0 && this._$w == 0) {
                    this._$hi = aD._$go | aD._$fo;
                    this._$Z = aD._$kS;
                } else {
                    this._$hi = aD._$go | aD._$fo | aD._$gb;
                    this._$Z = aD._$kS;
                }
            }
        }
    };
    aD.prototype._$RT = function (aK) {
        this._$IT(aK);
        var aJ = aK[0];
        var aH = aK[2];
        var aN = aK[1];
        var aM = aK[3];
        var aI = Math.sqrt(aJ * aJ + aN * aN);
        var aL = aJ * aM - aH * aN;
        if (aI == 0) {
            if (Q._$so) {
                console.log("affine._$RT() / rt==0");
            }
        } else {
            aK[0] = aI;
            aK[1] = aL / aI;
            aK[2] = (aN * aM + aJ * aH) / aL;
            aK[3] = Math.atan2(aN, aJ);
        }
    };
    aD.prototype._$ho = function (aN, aM, aI, aH) {
        var aL = new Float32Array(6);
        var aK = new Float32Array(6);
        aN._$RT(aL);
        aM._$RT(aK);
        var aJ = new Float32Array(6);
        aJ[0] = aL[0] + (aK[0] - aL[0]) * aI;
        aJ[1] = aL[1] + (aK[1] - aL[1]) * aI;
        aJ[2] = aL[2] + (aK[2] - aL[2]) * aI;
        aJ[3] = aL[3] + (aK[3] - aL[3]) * aI;
        aJ[4] = aL[4] + (aK[4] - aL[4]) * aI;
        aJ[5] = aL[5] + (aK[5] - aL[5]) * aI;
        aH._$CT(aJ);
    };
    aD.prototype._$CT = function (aJ) {
        var aI = Math.cos(aJ[3]);
        var aH = Math.sin(aJ[3]);
        this._$7 = aJ[0] * aI;
        this._$f = aJ[0] * aH;
        this._$H = aJ[1] * (aJ[2] * aI - aH);
        this._$g = aJ[1] * (aJ[2] * aH + aI);
        this._$k = aJ[4];
        this._$w = aJ[5];
        this.update();
    };
    aD.prototype._$IT = function (aH) {
        aH[0] = this._$7;
        aH[1] = this._$f;
        aH[2] = this._$H;
        aH[3] = this._$g;
        aH[4] = this._$k;
        aH[5] = this._$w;
    };
    function Y() {
        if (j) {
            return;
        }
        ah.prototype.constructor.call(this);
        this.motions = new Array();
        this._$7r = null;
        this._$7r = Y._$Co++;
        this._$D0 = 30;
        this._$yT = 0;
        this._$E = true;
        this.loopFadeIn = true;
        this._$AS = -1;
        _$a0();
    }
    Y.prototype = new ah();
    Y._$cs = "VISIBLE:";
    Y._$ar = "LAYOUT:";
    Y._$Co = 0;
    Y._$D2 = [];
    Y._$1T = 1;
    Y.loadMotion = function (aR) {
        var aM = new Y();
        var aI = [0];
        var aP = aR.length;
        aM._$yT = 0;
        for (var aJ = 0; aJ < aP; ++aJ) {
            var aQ = aR[aJ] & 255;
            if (aQ == "\n" || aQ == "\r") {
                continue;
            }
            if (aQ == "#") {
                for (; aJ < aP; ++aJ) {
                    if (aR[aJ] == "\n" || aR[aJ] == "\r") {
                        break;
                    }
                }
                continue;
            }
            if (aQ == "$") {
                var aT = aJ;
                var aK = -1;
                for (; aJ < aP; ++aJ) {
                    aQ = aR[aJ] & 255;
                    if (aQ == "\r" || aQ == "\n") {
                        break;
                    }
                    if (aQ == "=") {
                        aK = aJ;
                        break;
                    }
                }
                var aO = false;
                if (aK >= 0) {
                    if (aK == aT + 4 && aR[aT + 1] == "f" && aR[aT + 2] == "p" && aR[aT + 3] == "s") {
                        aO = true;
                    }
                    for (aJ = aK + 1; aJ < aP; ++aJ) {
                        aQ = aR[aJ] & 255;
                        if (aQ == "\r" || aQ == "\n") {
                            break;
                        }
                        if (aQ == "," || aQ == " " || aQ == "\t") {
                            continue;
                        }
                        var aL = G._$LS(aR, aP, aJ, aI);
                        if (aI[0] > 0) {
                            if (aO && 5 < aL && aL < 121) {
                                aM._$D0 = aL;
                            }
                        }
                        aJ = aI[0];
                    }
                }
                for (; aJ < aP; ++aJ) {
                    if (aR[aJ] == "\n" || aR[aJ] == "\r") {
                        break;
                    }
                }
                continue;
            }
            if (("a" <= aQ && aQ <= "z") || ("A" <= aQ && aQ <= "Z") || aQ == "_") {
                var aT = aJ;
                var aK = -1;
                for (; aJ < aP; ++aJ) {
                    aQ = aR[aJ] & 255;
                    if (aQ == "\r" || aQ == "\n") {
                        break;
                    }
                    if (aQ == "=") {
                        aK = aJ;
                        break;
                    }
                }
                if (aK >= 0) {
                    var aN = new t();
                    if (G.startsWith(aR, aT, Y._$cs)) {
                        aN._$RP = t._$hs;
                        aN._$4P = new String(aR, aT, aK - aT);
                    } else {
                        if (G.startsWith(aR, aT, Y._$ar)) {
                            aN._$4P = new String(aR, aT + 7, aK - aT - 7);
                            if (G.startsWith(aR, aT + 7, "ANCHOR_X")) {
                                aN._$RP = t._$xs;
                            } else {
                                if (G.startsWith(aR, aT + 7, "ANCHOR_Y")) {
                                    aN._$RP = t._$us;
                                } else {
                                    if (G.startsWith(aR, aT + 7, "SCALE_X")) {
                                        aN._$RP = t._$qs;
                                    } else {
                                        if (G.startsWith(aR, aT + 7, "SCALE_Y")) {
                                            aN._$RP = t._$Ys;
                                        } else {
                                            if (G.startsWith(aR, aT + 7, "X")) {
                                                aN._$RP = t._$ws;
                                            } else {
                                                if (G.startsWith(aR, aT + 7, "Y")) {
                                                    aN._$RP = t._$Ns;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            aN._$RP = t._$Fr;
                            aN._$4P = new String(aR, aT, aK - aT);
                        }
                    }
                    aM.motions.push(aN);
                    var aS = 0;
                    Y._$D2.clear();
                    for (aJ = aK + 1; aJ < aP; ++aJ) {
                        aQ = aR[aJ] & 255;
                        if (aQ == "\r" || aQ == "\n") {
                            break;
                        }
                        if (aQ == "," || aQ == " " || aQ == "\t") {
                            continue;
                        }
                        var aL = G._$LS(aR, aP, aJ, aI);
                        if (aI[0] > 0) {
                            Y._$D2.push(aL);
                            aS++;
                            var aH = aI[0];
                            if (aH < aJ) {
                                console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                                break;
                            }
                            aJ = aH;
                        }
                    }
                    aN._$I0 = Y._$D2._$BL();
                    if (aS > aM._$yT) {
                        aM._$yT = aS;
                    }
                }
            }
        }
        aM._$AS = ((1000 * aM._$yT) / aM._$D0) | 0;
        return aM;
    };
    Y.prototype.getDurationMSec = function () {
        return this._$AS;
    };
    Y.prototype.dump = function () {
        for (var aJ = 0; aJ < this.motions.length; aJ++) {
            var aH = this.motions[aJ];
            console.log("_$wL[%s] [%d]. ", aH._$4P, aH._$I0.length);
            for (var aI = 0; aI < aH._$I0.length && aI < 10; aI++) {
                console.log("%5.2f ,", aH._$I0[aI]);
            }
            console.log("\n");
        }
    };
    Y.prototype.updateParamExe = function (aH, aL, aO, aX) {
        var aM = aL - aX._$z2;
        var aV = (aM * this._$D0) / 1000;
        var aJ = aV | 0;
        var aP = aV - aJ;
        for (var aU = 0; aU < this.motions.length; aU++) {
            var aS = this.motions[aU];
            var aK = aS._$I0.length;
            var aQ = aS._$4P;
            if (aS._$RP == t._$hs) {
                var aT = aS._$I0[aJ >= aK ? aK - 1 : aJ];
                aH.setParamFloat(aQ, aT);
            } else {
                if (t._$ws <= aS._$RP && aS._$RP <= t._$Ys) {
                } else {
                    var aR = aH.getParamFloat(aQ);
                    var aY = aS._$I0[aJ >= aK ? aK - 1 : aJ];
                    var aW = aS._$I0[aJ + 1 >= aK ? aK - 1 : aJ + 1];
                    var aI = aY + (aW - aY) * aP;
                    var aN = aR + (aI - aR) * aO;
                    aH.setParamFloat(aQ, aN);
                }
            }
        }
        if (aJ >= this._$yT) {
            if (this._$E) {
                aX._$z2 = aL;
                if (this.loopFadeIn) {
                    aX._$bs = aL;
                }
            } else {
                aX._$9L = true;
            }
        }
    };
    Y.prototype._$r0 = function () {
        return this._$E;
    };
    Y.prototype._$aL = function (aH) {
        this._$E = aH;
    };
    Y.prototype.isLoopFadeIn = function () {
        return this.loopFadeIn;
    };
    Y.prototype.setLoopFadeIn = function (aH) {
        this.loopFadeIn = aH;
    };
    function aE() {
        this._$P = new Float32Array(100);
        this.size = 0;
    }
    aE.prototype.clear = function () {
        this.size = 0;
    };
    aE.prototype.add = function (aI) {
        if (this._$P.length <= this.size) {
            var aH = new Float32Array(this.size * 2);
            P._$jT(this._$P, 0, aH, 0, this.size);
            this._$P = aH;
        }
        this._$P[this.size++] = aI;
    };
    aE.prototype._$BL = function () {
        var aH = new Float32Array(this.size);
        P._$jT(this._$P, 0, aH, 0, this.size);
        return aH;
    };
    function t() {
        this._$4P = null;
        this._$I0 = null;
        this._$RP = null;
    }
    t._$Fr = 0;
    t._$hs = 1;
    t._$ws = 100;
    t._$Ns = 101;
    t._$xs = 102;
    t._$us = 103;
    t._$qs = 104;
    t._$Ys = 105;
    function aw() { }
    aw._$Ms = 1;
    aw._$Qs = 2;
    aw._$i2 = 0;
    aw._$No = 2;
    aw._$do = aw._$Ms;
    aw._$Ls = true;
    aw._$1r = 5;
    aw._$Qb = 65;
    aw._$J = 0.0001;
    aw._$FT = 0.001;
    aw._$Ss = 3;
    function ay() { }
    ay._$o7 = 6;
    ay._$S7 = 7;
    ay._$s7 = 8;
    ay._$77 = 9;
    ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10;
    ay.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11;
    ay._$T7 = ay.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1;
    ay._$Is = -2004318072;
    ay._$h0 = 0;
    ay._$4L = 23;
    ay._$7P = 33;
    ay._$uT = function (aH) {
        console.log("_$bo :: _$6 _$mo _$E0 : %d\n", aH);
    };
    ay._$9o = function (aH) {
        if (aH < 40) {
            ay._$uT(aH);
            return null;
        } else {
            if (aH < 50) {
                ay._$uT(aH);
                return null;
            } else {
                if (aH < 60) {
                    ay._$uT(aH);
                    return null;
                } else {
                    if (aH < 100) {
                        switch (aH) {
                            case 65:
                                return new E();
                            case 66:
                                return new g();
                            case 67:
                                return new aA();
                            case 68:
                                return new ab();
                            case 69:
                                return new X();
                            case 70:
                                return new b();
                            default:
                                ay._$uT(aH);
                                return null;
                        }
                    } else {
                        if (aH < 150) {
                            switch (aH) {
                                case 131:
                                    return new f();
                                case 133:
                                    return new s();
                                case 136:
                                    return new w();
                                case 137:
                                    return new an();
                                case 142:
                                    return new aq();
                            }
                        }
                    }
                }
            }
        }
        ay._$uT(aH);
        return null;
    };
    function y(aH) {
        if (j) {
            return;
        }
        this._$QT = true;
        this._$co = -1;
        this._$qo = 0;
        this._$pb = new Array(y._$is);
        this._$_2 = new Float32Array(y._$is);
        this._$vr = new Float32Array(y._$is);
        this._$Rr = new Float32Array(y._$is);
        this._$Or = new Float32Array(y._$is);
        this._$fs = new Float32Array(y._$is);
        this._$Js = new Array(y._$is);
        this._$3S = new Array();
        this._$aS = new Array();
        this._$Bo = null;
        this._$F2 = new Array();
        this._$db = new Array();
        this._$8b = new Array();
        this._$Hr = new Array();
        this._$Ws = null;
        this._$Vs = null;
        this._$Er = null;
        this._$Es = new Int16Array(aw._$Qb);
        this._$ZP = new Float32Array(aw._$1r * 2);
        this._$Ri = aH;
        this._$b0 = y._$HP++;
        this.clipManager = null;
        this.dp_webgl = null;
    }
    y._$HP = 0;
    y._$_0 = true;
    y._$V2 = -1;
    y._$W0 = -1;
    y._$jr = false;
    y._$ZS = true;
    y._$tr = -1000000;
    y._$lr = 1000000;
    y._$is = 32;
    y._$e = false;
    y.prototype.getDrawDataIndex = function (aI) {
        for (var aH = this._$aS.length - 1; aH >= 0; --aH) {
            if (this._$aS[aH] != null && this._$aS[aH].getDrawDataID() == aI) {
                return aH;
            }
        }
        return -1;
    };
    y.prototype.getDrawData = function (aH) {
        if (aH instanceof Z) {
            if (this._$Bo == null) {
                this._$Bo = new Object();
                var aJ = this._$aS.length;
                for (var aI = 0; aI < aJ; aI++) {
                    var aL = this._$aS[aI];
                    var aK = aL.getDrawDataID();
                    if (aK == null) {
                        continue;
                    }
                    this._$Bo[aK] = aL;
                }
            }
            return this._$Bo[id];
        } else {
            if (aH < this._$aS.length) {
                return this._$aS[aH];
            } else {
                return null;
            }
        }
    };
    y.prototype.release = function () {
        this._$3S.clear();
        this._$aS.clear();
        this._$F2.clear();
        if (this._$Bo != null) {
            this._$Bo.clear();
        }
        this._$db.clear();
        this._$8b.clear();
        this._$Hr.clear();
    };
    y.prototype.init = function () {
        this._$co++;
        if (this._$F2.length > 0) {
            this.release();
        }
        var aO = this._$Ri.getModelImpl();
        var aT = aO._$Xr();
        var aS = aT.length;
        var aH = new Array();
        var a3 = new Array();
        for (var aV = 0; aV < aS; ++aV) {
            var a4 = aT[aV];
            this._$F2.push(a4);
            this._$Hr.push(a4.init(this));
            var aK = a4.getBaseData();
            var aR = aK.length;
            for (var aU = 0; aU < aR; ++aU) {
                aH.push(aK[aU]);
            }
            for (var aU = 0; aU < aR; ++aU) {
                var aM = aK[aU].init(this);
                aM._$l2(aV);
                a3.push(aM);
            }
            var a1 = a4.getDrawData();
            var aP = a1.length;
            for (var aU = 0; aU < aP; ++aU) {
                var aZ = a1[aU];
                var a0 = aZ.init(this);
                a0._$IP = aV;
                this._$aS.push(aZ);
                this._$8b.push(a0);
            }
        }
        var aY = aH.length;
        var aN = n._$2o();
        while (true) {
            var aX = false;
            for (var aV = 0; aV < aY; ++aV) {
                var aL = aH[aV];
                if (aL == null) {
                    continue;
                }
                var a2 = aL.getTargetBaseDataID();
                if (a2 == null || a2 == aN || this.getBaseDataIndex(a2) >= 0) {
                    this._$3S.push(aL);
                    this._$db.push(a3[aV]);
                    aH[aV] = null;
                    aX = true;
                }
            }
            if (!aX) {
                break;
            }
        }
        var aI = aO._$E2();
        if (aI != null) {
            var aJ = aI._$1s();
            if (aJ != null) {
                var aW = aJ.length;
                for (var aV = 0; aV < aW; ++aV) {
                    var aQ = aJ[aV];
                    if (aQ == null) {
                        continue;
                    }
                    this._$02(aQ.getParamID(), aQ.getDefaultValue(), aQ.getMinValue(), aQ.getMaxValue());
                }
            }
        }
        this.clipManager = new W(this.dp_webgl);
        this.clipManager.init(this, this._$aS, this._$8b);
        this._$QT = true;
    };
    y.prototype.update = function () {
        if (y._$e) {
            q.start("_$zL");
        }
        var aK = this._$_2.length;
        for (var aW = 0; aW < aK; aW++) {
            if (this._$_2[aW] != this._$vr[aW]) {
                this._$Js[aW] = y._$ZS;
                this._$vr[aW] = this._$_2[aW];
            }
        }
        var aX = false;
        var aQ = this._$3S.length;
        var aN = this._$aS.length;
        var aS = a._$or();
        var aZ = a._$Pr();
        var aU = aZ - aS + 1;
        if (this._$Ws == null || this._$Ws.length < aU) {
            this._$Ws = new Int16Array(aU);
            this._$Vs = new Int16Array(aU);
        }
        for (var aW = 0; aW < aU; aW++) {
            this._$Ws[aW] = y._$V2;
            this._$Vs[aW] = y._$V2;
        }
        if (this._$Er == null || this._$Er.length < aN) {
            this._$Er = new Int16Array(aN);
        }
        for (var aW = 0; aW < aN; aW++) {
            this._$Er[aW] = y._$W0;
        }
        if (y._$e) {
            q.dump("_$zL");
        }
        if (y._$e) {
            q.start("_$UL");
        }
        var aL = null;
        for (var aV = 0; aV < aQ; ++aV) {
            var aJ = this._$3S[aV];
            var aH = this._$db[aV];
            try {
                aJ._$Nr(this, aH);
                aJ._$2b(this, aH);
            } catch (aY) {
                if (aL == null) {
                    aL = aY;
                }
            }
        }
        if (aL != null) {
            if (y._$_0) {
                q._$Rb(aL);
            }
        }
        if (y._$e) {
            q.dump("_$UL");
        }
        if (y._$e) {
            q.start("_$DL");
        }
        var aR = null;
        for (var aO = 0; aO < aN; ++aO) {
            var aM = this._$aS[aO];
            var aI = this._$8b[aO];
            try {
                aM._$Nr(this, aI);
                if (aI._$u2()) {
                    continue;
                }
                aM._$2b(this, aI);
                var aT = Math.floor(aM._$zS(this, aI) - aS);
                var aP;
                try {
                    aP = this._$Vs[aT];
                } catch (aY) {
                    console.log("_$li :: %s / %s 				@@_$fS\n", aY.toString(), aM.getDrawDataID().toString());
                    aT = Math.floor(aM._$zS(this, aI) - aS);
                    continue;
                }
                if (aP == y._$V2) {
                    this._$Ws[aT] = aO;
                } else {
                    this._$Er[aP] = aO;
                }
                this._$Vs[aT] = aO;
            } catch (aY) {
                if (aR == null) {
                    aR = aY;
                    Q._$sT(Q._$H7);
                }
            }
        }
        if (aR != null) {
            if (y._$_0) {
                q._$Rb(aR);
            }
        }
        if (y._$e) {
            q.dump("_$DL");
        }
        if (y._$e) {
            q.start("_$eL");
        }
        for (var aW = this._$Js.length - 1; aW >= 0; aW--) {
            this._$Js[aW] = y._$jr;
        }
        this._$QT = false;
        if (y._$e) {
            q.dump("_$eL");
        }
        return aX;
    };
    y.prototype.preDraw = function (aH) {
        if (this.clipManager != null) {
            aH._$ZT();
            this.clipManager.setupClip(this, aH);
        }
    };
    y.prototype.draw = function (aM) {
        if (this._$Ws == null) {
            q._$li("call _$Ri.update() before _$Ri.draw() ");
            return;
        }
        var aP = this._$Ws.length;
        aM._$ZT();
        for (var aK = 0; aK < aP; ++aK) {
            var aN = this._$Ws[aK];
            if (aN == y._$V2) {
                continue;
            }
            do {
                var aH = this._$aS[aN];
                var aI = this._$8b[aN];
                if (aI._$yo()) {
                    var aJ = aI._$IP;
                    var aL = this._$Hr[aJ];
                    aI._$VS = aL.getPartsOpacity();
                    aH.draw(aM, this, aI);
                }
                var aO = this._$Er[aN];
                if (aO <= aN || aO == y._$W0) {
                    break;
                }
                aN = aO;
            } while (true);
        }
    };
    y.prototype.getParamIndex = function (aH) {
        for (var aI = this._$pb.length - 1; aI >= 0; --aI) {
            if (this._$pb[aI] == aH) {
                return aI;
            }
        }
        return this._$02(aH, 0, y._$tr, y._$lr);
    };
    y.prototype._$BS = function (aH) {
        return this.getBaseDataIndex(aH);
    };
    y.prototype.getBaseDataIndex = function (aH) {
        for (var aI = this._$3S.length - 1; aI >= 0; --aI) {
            if (this._$3S[aI] != null && this._$3S[aI].getBaseDataID() == aH) {
                return aI;
            }
        }
        return -1;
    };
    y.prototype._$UT = function (aJ, aH) {
        var aI = new Float32Array(aH);
        P._$jT(aJ, 0, aI, 0, aJ.length);
        return aI;
    };
    y.prototype._$02 = function (aN, aM, aL, aH) {
        if (this._$qo >= this._$pb.length) {
            var aK = this._$pb.length;
            var aJ = new Array(aK * 2);
            P._$jT(this._$pb, 0, aJ, 0, aK);
            this._$pb = aJ;
            this._$_2 = this._$UT(this._$_2, aK * 2);
            this._$vr = this._$UT(this._$vr, aK * 2);
            this._$Rr = this._$UT(this._$Rr, aK * 2);
            this._$Or = this._$UT(this._$Or, aK * 2);
            var aI = new Array();
            P._$jT(this._$Js, 0, aI, 0, aK);
            this._$Js = aI;
        }
        this._$pb[this._$qo] = aN;
        this._$_2[this._$qo] = aM;
        this._$vr[this._$qo] = aM;
        this._$Rr[this._$qo] = aL;
        this._$Or[this._$qo] = aH;
        this._$Js[this._$qo] = y._$ZS;
        return this._$qo++;
    };
    y.prototype._$Zo = function (aI, aH) {
        this._$3S[aI] = aH;
    };
    y.prototype.setParamFloat = function (aH, aI) {
        if (aI < this._$Rr[aH]) {
            aI = this._$Rr[aH];
        }
        if (aI > this._$Or[aH]) {
            aI = this._$Or[aH];
        }
        this._$_2[aH] = aI;
    };
    y.prototype.loadParam = function () {
        var aH = this._$_2.length;
        if (aH > this._$fs.length) {
            aH = this._$fs.length;
        }
        P._$jT(this._$fs, 0, this._$_2, 0, aH);
    };
    y.prototype.saveParam = function () {
        var aH = this._$_2.length;
        if (aH > this._$fs.length) {
            this._$fs = new Float32Array(aH);
        }
        P._$jT(this._$_2, 0, this._$fs, 0, aH);
    };
    y.prototype._$v2 = function () {
        return this._$co;
    };
    y.prototype._$WS = function () {
        return this._$QT;
    };
    y.prototype._$Xb = function (aH) {
        return this._$Js[aH] == y._$ZS;
    };
    y.prototype._$vs = function () {
        return this._$Es;
    };
    y.prototype._$Tr = function () {
        return this._$ZP;
    };
    y.prototype.getBaseData = function (aH) {
        return this._$3S[aH];
    };
    y.prototype.getParamFloat = function (aH) {
        return this._$_2[aH];
    };
    y.prototype.getParamMax = function (aH) {
        return this._$Or[aH];
    };
    y.prototype.getParamMin = function (aH) {
        return this._$Rr[aH];
    };
    y.prototype.setPartsOpacity = function (aJ, aH) {
        var aI = this._$Hr[aJ];
        aI.setPartsOpacity(aH);
    };
    y.prototype.getPartsOpacity = function (aI) {
        var aH = this._$Hr[aI];
        return aH.getPartsOpacity();
    };
    y.prototype.getPartsDataIndex = function (aI) {
        for (var aH = this._$F2.length - 1; aH >= 0; --aH) {
            if (this._$F2[aH] != null && this._$F2[aH]._$p2() == aI) {
                return aH;
            }
        }
        return -1;
    };
    y.prototype._$q2 = function (aH) {
        return this._$db[aH];
    };
    y.prototype._$C2 = function (aH) {
        return this._$8b[aH];
    };
    y.prototype._$Bb = function (aH) {
        return this._$Hr[aH];
    };
    y.prototype._$5s = function (aO, aK) {
        var aJ = this._$Ws.length;
        var aN = aO;
        for (var aL = 0; aL < aJ; ++aL) {
            var aI = this._$Ws[aL];
            if (aI == y._$V2) {
                continue;
            }
            do {
                var aM = this._$8b[aI];
                if (aM._$yo()) {
                    aM._$GT()._$B2(this, aM, aN);
                    aN += aK;
                }
                var aH = this._$Er[aI];
                if (aH <= aI || aH == y._$W0) {
                    break;
                }
                aI = aH;
            } while (true);
        }
    };
    y.prototype.setDrawParam = function (aH) {
        this.dp_webgl = aH;
    };
    y.prototype.getDrawParam = function () {
        return this.dp_webgl;
    };
    function ap() { }
    ap._$0T = function (aH) {
        return ap._$0T(new _$5(aH));
    };
    ap._$0T = function (aJ) {
        if (!aJ.exists()) {
            throw new _$ls(aJ._$3b());
        }
        var aH = aJ.length();
        var aI = new Int8Array(aH);
        var aM = new _$Xs(new _$kb(aJ), 8192);
        var aK;
        var aL = 0;
        while ((aK = aM.read(aI, aL, aH - aL)) > 0) {
            aL += aK;
        }
        return aI;
    };
    ap._$C = function (aJ) {
        var aI = null;
        var aL = null;
        try {
            aI = aJ instanceof Array ? aJ : new _$Xs(aJ, 8192);
            aL = new _$js();
            var aM = 1000;
            var aK;
            var aH = new Int8Array(aM);
            while ((aK = aI.read(aH)) > 0) {
                aL.write(aH, 0, aK);
            }
            return aL._$TS();
        } finally {
            if (aJ != null) {
                aJ.close();
            }
            if (aL != null) {
                aL.flush();
                aL.close();
            }
        }
    };
    function ar() {
        if (j) {
            return;
        }
        this._$12 = null;
        this._$bb = null;
        this._$_L = null;
        this._$jo = null;
        this._$iL = null;
        this._$0L = null;
        this._$Br = null;
        this._$Dr = null;
        this._$Cb = null;
        this._$mr = null;
        this._$_L = az.STATE_FIRST;
        this._$Br = 4000;
        this._$Dr = 100;
        this._$Cb = 50;
        this._$mr = 150;
        this._$jo = true;
        this._$iL = "PARAM_EYE_L_OPEN";
        this._$0L = "PARAM_EYE_R_OPEN";
    }
    ar.prototype._$T2 = function () {
        var aI = P.getUserTimeMSec();
        var aH = Math._$10();
        return aI + aH * (2 * this._$Br - 1);
    };
    ar.prototype._$uo = function (aH) {
        this._$Br = aH;
    };
    ar.prototype._$QS = function (aI, aH, aJ) {
        this._$Dr = aI;
        this._$Cb = aH;
        this._$mr = aJ;
    };
    ar.prototype._$7T = function (aI) {
        var aK = P.getUserTimeMSec();
        var aH;
        var aJ = 0;
        switch (this._$_L) {
            case STATE_CLOSING:
                aJ = (aK - this._$bb) / this._$Dr;
                if (aJ >= 1) {
                    aJ = 1;
                    this._$_L = az.STATE_CLOSED;
                    this._$bb = aK;
                }
                aH = 1 - aJ;
                break;
            case STATE_CLOSED:
                aJ = (aK - this._$bb) / this._$Cb;
                if (aJ >= 1) {
                    this._$_L = az.STATE_OPENING;
                    this._$bb = aK;
                }
                aH = 0;
                break;
            case STATE_OPENING:
                aJ = (aK - this._$bb) / this._$mr;
                if (aJ >= 1) {
                    aJ = 1;
                    this._$_L = az.STATE_INTERVAL;
                    this._$12 = this._$T2();
                }
                aH = aJ;
                break;
            case STATE_INTERVAL:
                if (this._$12 < aK) {
                    this._$_L = az.STATE_CLOSING;
                    this._$bb = aK;
                }
                aH = 1;
                break;
            case STATE_FIRST:
            default:
                this._$_L = az.STATE_INTERVAL;
                this._$12 = this._$T2();
                aH = 1;
                break;
        }
        if (!this._$jo) {
            aH = -aH;
        }
        aI.setParamFloat(this._$iL, aH);
        aI.setParamFloat(this._$0L, aH);
    };
    var az = function () { };
    az.STATE_FIRST = "STATE_FIRST";
    az.STATE_INTERVAL = "STATE_INTERVAL";
    az.STATE_CLOSING = "STATE_CLOSING";
    az.STATE_CLOSED = "STATE_CLOSED";
    az.STATE_OPENING = "STATE_OPENING";
    function x() {
        if (j) {
            return;
        }
        ax.prototype.constructor.call(this);
        this._$sb = new Int32Array(x._$As);
        this._$U2 = new Array();
        this.transform = null;
        this.gl = null;
        if (x._$NT == null) {
            x._$NT = x._$9r(256);
            x._$vS = x._$9r(256);
            x._$no = x._$vb(256);
        }
    }
    x.prototype = new ax();
    x._$As = 32;
    x._$Gr = false;
    x._$NT = null;
    x._$vS = null;
    x._$no = null;
    x._$9r = function (aH) {
        var aI = new Float32Array(aH);
        return aI;
    };
    x._$vb = function (aH) {
        var aI = new Int16Array(aH);
        return aI;
    };
    x._$cr = function (aI, aH) {
        if (aI == null || aI._$yL() < aH.length) {
            aI = x._$9r(aH.length * 2);
            aI.put(aH);
            aI._$oT(0);
        } else {
            aI.clear();
            aI.put(aH);
            aI._$oT(0);
        }
        return aI;
    };
    x._$mb = function (aI, aH) {
        if (aI == null || aI._$yL() < aH.length) {
            aI = x._$vb(aH.length * 2);
            aI.put(aH);
            aI._$oT(0);
        } else {
            aI.clear();
            aI.put(aH);
            aI._$oT(0);
        }
        return aI;
    };
    x._$Hs = function () {
        return x._$Gr;
    };
    x._$as = function (aH) {
        x._$Gr = aH;
    };
    x.prototype.setGL = function (aH) {
        this.gl = aH;
    };
    x.prototype.setTransform = function (aH) {
        this.transform = aH;
    };
    x.prototype._$ZT = function () { };
    x.prototype._$Uo = function (aO, aH, aP, aI, aQ, aM, aK, aJ) {
        if (aM < 0.01) {
            return;
        }
        var aL = this._$U2[aO];
        var aN = aM > 0.9 ? Q.EXPAND_W : 0;
        this.gl.drawElements(aL, aP, aI, aQ, aM, aN, this.transform, aJ);
    };
    x.prototype._$Rs = function () {
        throw new Error("_$Rs");
    };
    x.prototype._$Ds = function (aH) {
        throw new Error("_$Ds");
    };
    x.prototype._$K2 = function () {
        for (var aH = 0; aH < this._$sb.length; aH++) {
            var aI = this._$sb[aH];
            if (aI != 0) {
                this.gl._$Sr(1, this._$sb, aH);
                this._$sb[aH] = 0;
            }
        }
    };
    x.prototype.setTexture = function (aI, aH) {
        if (this._$sb.length < aI + 1) {
            this._$nS(aI);
        }
        this._$sb[aI] = aH;
    };
    x.prototype.setTexture = function (aH, aI) {
        if (this._$sb.length < aH + 1) {
            this._$nS(aH);
        }
        this._$U2[aH] = aI;
    };
    x.prototype._$nS = function (aH) {
        var aK = Math.max(this._$sb.length * 2, aH + 1 + 10);
        var aI = new Int32Array(aK);
        P._$jT(this._$sb, 0, aI, 0, this._$sb.length);
        this._$sb = aI;
        var aJ = new Array();
        P._$jT(this._$U2, 0, aJ, 0, this._$U2.length);
        this._$U2 = aJ;
    };
    function ab() {
        if (j) {
            return;
        }
        c.prototype.constructor.call(this);
        this._$GS = null;
        this._$Y0 = null;
    }
    ab.prototype = new c();
    ab._$Xo = new Float32Array(2);
    ab._$io = new Float32Array(2);
    ab._$0o = new Float32Array(2);
    ab._$Lo = new Float32Array(2);
    ab._$To = new Float32Array(2);
    ab._$Po = new Float32Array(2);
    ab._$gT = new Array();
    ab.prototype._$zP = function () {
        this._$GS = new g();
        this._$GS._$zP();
        this._$Y0 = new Array();
    };
    ab.prototype.getType = function () {
        return c._$c2;
    };
    ab.prototype._$F0 = function (aH) {
        c.prototype._$F0.call(this, aH);
        this._$GS = aH._$nP();
        this._$Y0 = aH._$nP();
        c.prototype.readV2_opacity.call(this, aH);
    };
    ab.prototype.init = function (aH) {
        var aI = new al(this);
        aI._$Yr = new X();
        if (this._$32()) {
            aI._$Wr = new X();
        }
        return aI;
    };
    ab.prototype._$Nr = function (bf, bx) {
        if (!(this == bx._$GT())) {
            console.log("### assert!! ### ");
        }
        var bm = bx;
        if (!this._$GS._$Ur(bf)) {
            return;
        }
        var bw = ab._$gT;
        bw[0] = false;
        var a2 = this._$GS._$Q2(bf, bw);
        bx._$Ib(bw[0]);
        this.interpolateOpacity(bf, this._$GS, bx, bw);
        var a3 = bf._$vs();
        var ba = bf._$Tr();
        this._$GS._$zr(a3, ba, a2);
        if (a2 <= 0) {
            var bn = this._$Y0[a3[0]];
            bm._$Yr.init(bn);
        } else {
            if (a2 == 1) {
                var bn = this._$Y0[a3[0]];
                var bl = this._$Y0[a3[1]];
                var a9 = ba[0];
                bm._$Yr._$fL = bn._$fL + (bl._$fL - bn._$fL) * a9;
                bm._$Yr._$gL = bn._$gL + (bl._$gL - bn._$gL) * a9;
                bm._$Yr._$B0 = bn._$B0 + (bl._$B0 - bn._$B0) * a9;
                bm._$Yr._$z0 = bn._$z0 + (bl._$z0 - bn._$z0) * a9;
                bm._$Yr._$qT = bn._$qT + (bl._$qT - bn._$qT) * a9;
            } else {
                if (a2 == 2) {
                    var bn = this._$Y0[a3[0]];
                    var bl = this._$Y0[a3[1]];
                    var a1 = this._$Y0[a3[2]];
                    var a0 = this._$Y0[a3[3]];
                    var a9 = ba[0];
                    var a8 = ba[1];
                    var bC = bn._$fL + (bl._$fL - bn._$fL) * a9;
                    var bB = a1._$fL + (a0._$fL - a1._$fL) * a9;
                    bm._$Yr._$fL = bC + (bB - bC) * a8;
                    bC = bn._$gL + (bl._$gL - bn._$gL) * a9;
                    bB = a1._$gL + (a0._$gL - a1._$gL) * a9;
                    bm._$Yr._$gL = bC + (bB - bC) * a8;
                    bC = bn._$B0 + (bl._$B0 - bn._$B0) * a9;
                    bB = a1._$B0 + (a0._$B0 - a1._$B0) * a9;
                    bm._$Yr._$B0 = bC + (bB - bC) * a8;
                    bC = bn._$z0 + (bl._$z0 - bn._$z0) * a9;
                    bB = a1._$z0 + (a0._$z0 - a1._$z0) * a9;
                    bm._$Yr._$z0 = bC + (bB - bC) * a8;
                    bC = bn._$qT + (bl._$qT - bn._$qT) * a9;
                    bB = a1._$qT + (a0._$qT - a1._$qT) * a9;
                    bm._$Yr._$qT = bC + (bB - bC) * a8;
                } else {
                    if (a2 == 3) {
                        var aP = this._$Y0[a3[0]];
                        var aO = this._$Y0[a3[1]];
                        var bu = this._$Y0[a3[2]];
                        var bs = this._$Y0[a3[3]];
                        var aK = this._$Y0[a3[4]];
                        var aJ = this._$Y0[a3[5]];
                        var bj = this._$Y0[a3[6]];
                        var bi = this._$Y0[a3[7]];
                        var a9 = ba[0];
                        var a8 = ba[1];
                        var a6 = ba[2];
                        var bC = aP._$fL + (aO._$fL - aP._$fL) * a9;
                        var bB = bu._$fL + (bs._$fL - bu._$fL) * a9;
                        var bz = aK._$fL + (aJ._$fL - aK._$fL) * a9;
                        var by = bj._$fL + (bi._$fL - bj._$fL) * a9;
                        bm._$Yr._$fL = (1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8);
                        bC = aP._$gL + (aO._$gL - aP._$gL) * a9;
                        bB = bu._$gL + (bs._$gL - bu._$gL) * a9;
                        bz = aK._$gL + (aJ._$gL - aK._$gL) * a9;
                        by = bj._$gL + (bi._$gL - bj._$gL) * a9;
                        bm._$Yr._$gL = (1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8);
                        bC = aP._$B0 + (aO._$B0 - aP._$B0) * a9;
                        bB = bu._$B0 + (bs._$B0 - bu._$B0) * a9;
                        bz = aK._$B0 + (aJ._$B0 - aK._$B0) * a9;
                        by = bj._$B0 + (bi._$B0 - bj._$B0) * a9;
                        bm._$Yr._$B0 = (1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8);
                        bC = aP._$z0 + (aO._$z0 - aP._$z0) * a9;
                        bB = bu._$z0 + (bs._$z0 - bu._$z0) * a9;
                        bz = aK._$z0 + (aJ._$z0 - aK._$z0) * a9;
                        by = bj._$z0 + (bi._$z0 - bj._$z0) * a9;
                        bm._$Yr._$z0 = (1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8);
                        bC = aP._$qT + (aO._$qT - aP._$qT) * a9;
                        bB = bu._$qT + (bs._$qT - bu._$qT) * a9;
                        bz = aK._$qT + (aJ._$qT - aK._$qT) * a9;
                        by = bj._$qT + (bi._$qT - bj._$qT) * a9;
                        bm._$Yr._$qT = (1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8);
                    } else {
                        if (a2 == 4) {
                            var aT = this._$Y0[a3[0]];
                            var aS = this._$Y0[a3[1]];
                            var bE = this._$Y0[a3[2]];
                            var bD = this._$Y0[a3[3]];
                            var aN = this._$Y0[a3[4]];
                            var aM = this._$Y0[a3[5]];
                            var bp = this._$Y0[a3[6]];
                            var bo = this._$Y0[a3[7]];
                            var bh = this._$Y0[a3[8]];
                            var bg = this._$Y0[a3[9]];
                            var aY = this._$Y0[a3[10]];
                            var aW = this._$Y0[a3[11]];
                            var a7 = this._$Y0[a3[12]];
                            var a5 = this._$Y0[a3[13]];
                            var aR = this._$Y0[a3[14]];
                            var aQ = this._$Y0[a3[15]];
                            var a9 = ba[0];
                            var a8 = ba[1];
                            var a6 = ba[2];
                            var a4 = ba[3];
                            var bC = aT._$fL + (aS._$fL - aT._$fL) * a9;
                            var bB = bE._$fL + (bD._$fL - bE._$fL) * a9;
                            var bz = aN._$fL + (aM._$fL - aN._$fL) * a9;
                            var by = bp._$fL + (bo._$fL - bp._$fL) * a9;
                            var bv = bh._$fL + (bg._$fL - bh._$fL) * a9;
                            var bt = aY._$fL + (aW._$fL - aY._$fL) * a9;
                            var br = a7._$fL + (a5._$fL - a7._$fL) * a9;
                            var bq = aR._$fL + (aQ._$fL - aR._$fL) * a9;
                            bm._$Yr._$fL = (1 - a4) * ((1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8)) + a4 * ((1 - a6) * (bv + (bt - bv) * a8) + a6 * (br + (bq - br) * a8));
                            bC = aT._$gL + (aS._$gL - aT._$gL) * a9;
                            bB = bE._$gL + (bD._$gL - bE._$gL) * a9;
                            bz = aN._$gL + (aM._$gL - aN._$gL) * a9;
                            by = bp._$gL + (bo._$gL - bp._$gL) * a9;
                            bv = bh._$gL + (bg._$gL - bh._$gL) * a9;
                            bt = aY._$gL + (aW._$gL - aY._$gL) * a9;
                            br = a7._$gL + (a5._$gL - a7._$gL) * a9;
                            bq = aR._$gL + (aQ._$gL - aR._$gL) * a9;
                            bm._$Yr._$gL = (1 - a4) * ((1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8)) + a4 * ((1 - a6) * (bv + (bt - bv) * a8) + a6 * (br + (bq - br) * a8));
                            bC = aT._$B0 + (aS._$B0 - aT._$B0) * a9;
                            bB = bE._$B0 + (bD._$B0 - bE._$B0) * a9;
                            bz = aN._$B0 + (aM._$B0 - aN._$B0) * a9;
                            by = bp._$B0 + (bo._$B0 - bp._$B0) * a9;
                            bv = bh._$B0 + (bg._$B0 - bh._$B0) * a9;
                            bt = aY._$B0 + (aW._$B0 - aY._$B0) * a9;
                            br = a7._$B0 + (a5._$B0 - a7._$B0) * a9;
                            bq = aR._$B0 + (aQ._$B0 - aR._$B0) * a9;
                            bm._$Yr._$B0 = (1 - a4) * ((1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8)) + a4 * ((1 - a6) * (bv + (bt - bv) * a8) + a6 * (br + (bq - br) * a8));
                            bC = aT._$z0 + (aS._$z0 - aT._$z0) * a9;
                            bB = bE._$z0 + (bD._$z0 - bE._$z0) * a9;
                            bz = aN._$z0 + (aM._$z0 - aN._$z0) * a9;
                            by = bp._$z0 + (bo._$z0 - bp._$z0) * a9;
                            bv = bh._$z0 + (bg._$z0 - bh._$z0) * a9;
                            bt = aY._$z0 + (aW._$z0 - aY._$z0) * a9;
                            br = a7._$z0 + (a5._$z0 - a7._$z0) * a9;
                            bq = aR._$z0 + (aQ._$z0 - aR._$z0) * a9;
                            bm._$Yr._$z0 = (1 - a4) * ((1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8)) + a4 * ((1 - a6) * (bv + (bt - bv) * a8) + a6 * (br + (bq - br) * a8));
                            bC = aT._$qT + (aS._$qT - aT._$qT) * a9;
                            bB = bE._$qT + (bD._$qT - bE._$qT) * a9;
                            bz = aN._$qT + (aM._$qT - aN._$qT) * a9;
                            by = bp._$qT + (bo._$qT - bp._$qT) * a9;
                            bv = bh._$qT + (bg._$qT - bh._$qT) * a9;
                            bt = aY._$qT + (aW._$qT - aY._$qT) * a9;
                            br = a7._$qT + (a5._$qT - a7._$qT) * a9;
                            bq = aR._$qT + (aQ._$qT - aR._$qT) * a9;
                            bm._$Yr._$qT = (1 - a4) * ((1 - a6) * (bC + (bB - bC) * a8) + a6 * (bz + (by - bz) * a8)) + a4 * ((1 - a6) * (bv + (bt - bv) * a8) + a6 * (br + (bq - br) * a8));
                        } else {
                            var aV = Math.pow(2, a2) | 0;
                            var aZ = new Float32Array(aV);
                            for (var bk = 0; bk < aV; bk++) {
                                var aI = bk;
                                var aH = 1;
                                for (var aL = 0; aL < a2; aL++) {
                                    aH *= aI % 2 == 0 ? 1 - ba[aL] : ba[aL];
                                    aI /= 2;
                                }
                                aZ[bk] = aH;
                            }
                            var bA = new Array();
                            for (var aU = 0; aU < aV; aU++) {
                                bA[aU] = this._$Y0[a3[aU]];
                            }
                            var be = 0,
                                bc = 0,
                                bd = 0,
                                bb = 0,
                                aX = 0;
                            for (var aU = 0; aU < aV; aU++) {
                                be += aZ[aU] * bA[aU]._$fL;
                                bc += aZ[aU] * bA[aU]._$gL;
                                bd += aZ[aU] * bA[aU]._$B0;
                                bb += aZ[aU] * bA[aU]._$z0;
                                aX += aZ[aU] * bA[aU]._$qT;
                            }
                            bm._$Yr._$fL = be;
                            bm._$Yr._$gL = bc;
                            bm._$Yr._$B0 = bd;
                            bm._$Yr._$z0 = bb;
                            bm._$Yr._$qT = aX;
                        }
                    }
                }
            }
        }
        var bn = this._$Y0[a3[0]];
        bm._$Yr.reflectX = bn.reflectX;
        bm._$Yr.reflectY = bn.reflectY;
    };
    ab.prototype._$2b = function (aM, aH) {
        if (!(this == aH._$GT())) {
            console.log("### assert!! ### ");
        }
        var aR = aH;
        aR._$hS(true);
        if (!this._$32()) {
            aR.setTotalScale_notForClient(aR._$Yr._$B0);
            aR.setTotalOpacity(aR.getInterpolatedOpacity());
        } else {
            var aT = this.getTargetBaseDataID();
            if (aR._$8r == c._$ur) {
                aR._$8r = aM.getBaseDataIndex(aT);
            }
            if (aR._$8r < 0) {
                if (Q._$so) {
                    q._$li("_$L _$0P _$G :: %s", aT);
                }
                aR._$hS(false);
            } else {
                var aI = aM.getBaseData(aR._$8r);
                if (aI != null) {
                    var aL = aM._$q2(aR._$8r);
                    var aS = ab._$Xo;
                    aS[0] = aR._$Yr._$fL;
                    aS[1] = aR._$Yr._$gL;
                    var aJ = ab._$io;
                    aJ[0] = 0;
                    aJ[1] = -0.1;
                    var aO = aL._$GT().getType();
                    if (aO == c._$c2) {
                        aJ[1] = -10;
                    } else {
                        aJ[1] = -0.1;
                    }
                    var aQ = ab._$0o;
                    this._$Jr(aM, aI, aL, aS, aJ, aQ);
                    var aP = aC._$92(aJ, aQ);
                    aI._$nb(aM, aL, aS, aS, 1, 0, 2);
                    aR._$Wr._$fL = aS[0];
                    aR._$Wr._$gL = aS[1];
                    aR._$Wr._$B0 = aR._$Yr._$B0;
                    aR._$Wr._$z0 = aR._$Yr._$z0;
                    aR._$Wr._$qT = aR._$Yr._$qT - aP * aC._$NS;
                    var aK = aL.getTotalScale();
                    aR.setTotalScale_notForClient(aK * aR._$Wr._$B0);
                    var aN = aL.getTotalOpacity();
                    aR.setTotalOpacity(aN * aR.getInterpolatedOpacity());
                    aR._$Wr.reflectX = aR._$Yr.reflectX;
                    aR._$Wr.reflectY = aR._$Yr.reflectY;
                    aR._$hS(aL._$yo());
                } else {
                    aR._$hS(false);
                }
            }
        }
    };
    ab.prototype._$nb = function (aJ, aR, aL, a4, aT, aO, a2) {
        if (!(this == aR._$GT())) {
            console.log("### assert!! ### ");
        }
        var aH = aR;
        var aU = aH._$Wr != null ? aH._$Wr : aH._$Yr;
        var a0 = Math.sin(aC._$bS * aU._$qT);
        var aP = Math.cos(aC._$bS * aU._$qT);
        var a3 = aH.getTotalScale();
        var aW = aU.reflectX ? -1 : 1;
        var aV = aU.reflectY ? -1 : 1;
        var aS = aP * a3 * aW;
        var aQ = -a0 * a3 * aV;
        var a1 = a0 * a3 * aW;
        var aZ = aP * a3 * aV;
        var aY = aU._$fL;
        var aX = aU._$gL;
        var aN, aM;
        var aI = aT * a2;
        for (var aK = aO; aK < aI; aK += a2) {
            aN = aL[aK];
            aM = aL[aK + 1];
            a4[aK] = aS * aN + aQ * aM + aY;
            a4[aK + 1] = a1 * aN + aZ * aM + aX;
        }
    };
    ab.prototype._$Jr = function (aP, aK, aI, aR, aQ, aH) {
        if (!(aK == aI._$GT())) {
            console.log("### assert!! ### ");
        }
        var aO = ab._$Lo;
        ab._$Lo[0] = aR[0];
        ab._$Lo[1] = aR[1];
        aK._$nb(aP, aI, aO, aO, 1, 0, 2);
        var aL = ab._$To;
        var aS = ab._$Po;
        var aN = 10;
        var aJ = 1;
        for (var aM = 0; aM < aN; aM++) {
            aS[0] = aR[0] + aJ * aQ[0];
            aS[1] = aR[1] + aJ * aQ[1];
            aK._$nb(aP, aI, aS, aL, 1, 0, 2);
            aL[0] -= aO[0];
            aL[1] -= aO[1];
            if (aL[0] != 0 || aL[1] != 0) {
                aH[0] = aL[0];
                aH[1] = aL[1];
                return;
            }
            aS[0] = aR[0] - aJ * aQ[0];
            aS[1] = aR[1] - aJ * aQ[1];
            aK._$nb(aP, aI, aS, aL, 1, 0, 2);
            aL[0] -= aO[0];
            aL[1] -= aO[1];
            if (aL[0] != 0 || aL[1] != 0) {
                aL[0] = -aL[0];
                aL[0] = -aL[0];
                aH[0] = aL[0];
                aH[1] = aL[1];
                return;
            }
            aJ *= 0.1;
        }
        if (Q._$so) {
            console.log("_$L0 to transform _$SP\n");
        }
    };
    function al(aH) {
        B.prototype.constructor.call(this, aH);
        this._$8r = c._$ur;
        this._$Yr = null;
        this._$Wr = null;
    }
    al.prototype = new B();
    function a() {
        if (j) {
            return;
        }
        ae.prototype.constructor.call(this);
        this._$gP = null;
        this._$dr = null;
        this._$GS = null;
        this._$qb = null;
        this._$Lb = null;
        this._$mS = null;
    }
    a.prototype = new ae();
    a._$ur = -2;
    a._$ES = 500;
    a._$wb = 2;
    a._$8S = 3;
    a._$os = 4;
    a._$52 = a._$ES;
    a._$R2 = a._$ES;
    a._$Sb = function (aJ) {
        for (var aI = aJ.length - 1; aI >= 0; --aI) {
            var aH = aJ[aI];
            if (aH < a._$52) {
                a._$52 = aH;
            } else {
                if (aH > a._$R2) {
                    a._$R2 = aH;
                }
            }
        }
    };
    a._$or = function () {
        return a._$52;
    };
    a._$Pr = function () {
        return a._$R2;
    };
    a.prototype._$F0 = function (aH) {
        this._$gP = aH._$nP();
        this._$dr = aH._$nP();
        this._$GS = aH._$nP();
        this._$qb = aH._$6L();
        this._$Lb = aH._$cS();
        this._$mS = aH._$Tb();
        if (aH.getFormatVersion() >= ay._$T7) {
            this.clipID = aH._$nP();
            this.clipIDList = this.convertClipIDForV2_11(this.clipID);
        } else {
            this.clipIDList = null;
        }
        a._$Sb(this._$Lb);
    };
    a.prototype.getClipIDList = function () {
        return this.clipIDList;
    };
    a.prototype._$Nr = function (aI, aH) {
        aH._$IS[0] = false;
        aH._$Us = aG._$Z2(aI, this._$GS, aH._$IS, this._$Lb);
        if (Q._$Zs) {
        } else {
            if (aH._$IS[0]) {
                return;
            }
        }
        aH._$7s = aG._$br(aI, this._$GS, aH._$IS, this._$mS);
    };
    a.prototype._$2b = function (aH) { };
    a.prototype.getDrawDataID = function () {
        return this._$gP;
    };
    a.prototype._$j2 = function (aH) {
        this._$gP = aH;
    };
    a.prototype.getOpacity = function (aH, aI) {
        return aI._$7s;
    };
    a.prototype._$zS = function (aH, aI) {
        return aI._$Us;
    };
    a.prototype.getTargetBaseDataID = function () {
        return this._$dr;
    };
    a.prototype._$gs = function (aH) {
        this._$dr = aH;
    };
    a.prototype._$32 = function () {
        return this._$dr != null && this._$dr != n._$2o();
    };
    a.prototype.getType = function () { };
    function aq() {
        if (j) {
            return;
        }
        this._$NL = null;
        this._$3S = null;
        this._$aS = null;
        aq._$42++;
    }
    aq._$42 = 0;
    aq.prototype._$1b = function () {
        return this._$3S;
    };
    aq.prototype.getDrawDataList = function () {
        return this._$aS;
    };
    aq.prototype._$F0 = function (aH) {
        this._$NL = aH._$nP();
        this._$aS = aH._$nP();
        this._$3S = aH._$nP();
    };
    aq.prototype._$kr = function (aH) {
        aH._$Zo(this._$3S);
        aH._$xo(this._$aS);
        this._$3S = null;
        this._$aS = null;
    };
    function v() {
        if (j) {
            return;
        }
        aa.prototype.constructor.call(this);
        this._$zo = new x();
    }
    v.prototype = new aa();
    v.loadModel = function (aI) {
        var aH = new v();
        aa._$62(aH, aI);
        return aH;
    };
    v.loadModel = function (aI) {
        var aH = new v();
        aa._$62(aH, aI);
        return aH;
    };
    v._$to = function () {
        var aH = new v();
        return aH;
    };
    v._$er = function (aM) {
        var aJ = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
        if (aJ.exists() == false) {
            throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + aJ._$PL());
        }
        var aH = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"];
        var aK = v.loadModel(aJ._$3b());
        for (var aI = 0; aI < aH.length; aI++) {
            var aL = new _$5(aH[aI]);
            if (aL.exists() == false) {
                throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + aL._$PL());
            }
            aK.setTexture(aI, _$nL._$_o(aM, aL._$3b()));
        }
        return aK;
    };
    v.prototype.setGL = function (aH) {
        this._$zo.setGL(aH);
    };
    v.prototype.setTransform = function (aH) {
        this._$zo.setTransform(aH);
    };
    v.prototype.draw = function () {
        this._$5S.draw(this._$zo);
    };
    v.prototype._$K2 = function () {
        this._$zo._$K2();
    };
    v.prototype.setTexture = function (aI, aH) {
        if (this._$zo == null) {
            q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");
        }
        this._$zo.setTexture(aI, aH);
    };
    v.prototype.setTexture = function (aI, aH) {
        if (this._$zo == null) {
            q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");
        }
        this._$zo.setTexture(aI, aH);
    };
    v.prototype._$Rs = function () {
        return this._$zo._$Rs();
    };
    v.prototype._$Ds = function (aH) {
        this._$zo._$Ds(aH);
    };
    v.prototype.getDrawParam = function () {
        return this._$zo;
    };
    function ao() {
        if (j) {
            return;
        }
        ah.prototype.constructor.call(this);
        this.motions = new Array();
        this._$o2 = null;
        this._$7r = ao._$Co++;
        this._$D0 = 30;
        this._$yT = 0;
        this._$E = false;
        this.loopFadeIn = true;
        this._$rr = -1;
        this._$eP = 0;
    }
    ao.prototype = new ah();
    ao._$cs = "VISIBLE:";
    ao._$ar = "LAYOUT:";
    ao.MTN_PREFIX_FADEIN = "FADEIN:";
    ao.MTN_PREFIX_FADEOUT = "FADEOUT:";
    ao._$Co = 0;
    ao._$1T = 1;
    ao.loadMotion = function (aJ) {
        var aI = ap._$C(aJ);
        var aH = ao.loadMotion(aI);
        return aH;
    };
    function p(aI, aH) {
        return String.fromCharCode(aI.getUint8(aH));
    }
    ao.loadMotion = function (aT) {
        if (aT instanceof ArrayBuffer) {
            aT = new DataView(aT);
        }
        var aN = new ao();
        var aI = [0];
        var aQ = aT.byteLength;
        aN._$yT = 0;
        for (var aJ = 0; aJ < aQ; ++aJ) {
            var aS = p(aT, aJ);
            var aL = aS.charCodeAt(0);
            if (aS == "\n" || aS == "\r") {
                continue;
            }
            if (aS == "#") {
                for (; aJ < aQ; ++aJ) {
                    if (p(aT, aJ) == "\n" || p(aT, aJ) == "\r") {
                        break;
                    }
                }
                continue;
            }
            if (aS == "$") {
                var aV = aJ;
                var aK = -1;
                for (; aJ < aQ; ++aJ) {
                    aS = p(aT, aJ);
                    if (aS == "\r" || aS == "\n") {
                        break;
                    }
                    if (aS == "=") {
                        aK = aJ;
                        break;
                    }
                }
                var aP = false;
                if (aK >= 0) {
                    if (aK == aV + 4 && p(aT, aV + 1) == "f" && p(aT, aV + 2) == "p" && p(aT, aV + 3) == "s") {
                        aP = true;
                    }
                    for (aJ = aK + 1; aJ < aQ; ++aJ) {
                        aS = p(aT, aJ);
                        if (aS == "\r" || aS == "\n") {
                            break;
                        }
                        if (aS == "," || aS == " " || aS == "\t") {
                            continue;
                        }
                        var aM = G._$LS(aT, aQ, aJ, aI);
                        if (aI[0] > 0) {
                            if (aP && 5 < aM && aM < 121) {
                                aN._$D0 = aM;
                            }
                        }
                        aJ = aI[0];
                    }
                }
                for (; aJ < aQ; ++aJ) {
                    if (p(aT, aJ) == "\n" || p(aT, aJ) == "\r") {
                        break;
                    }
                }
                continue;
            }
            if ((97 <= aL && aL <= 122) || (65 <= aL && aL <= 90) || aS == "_") {
                var aV = aJ;
                var aK = -1;
                for (; aJ < aQ; ++aJ) {
                    aS = p(aT, aJ);
                    if (aS == "\r" || aS == "\n") {
                        break;
                    }
                    if (aS == "=") {
                        aK = aJ;
                        break;
                    }
                }
                if (aK >= 0) {
                    var aO = new t();
                    if (G.startsWith(aT, aV, ao._$cs)) {
                        aO._$RP = t._$hs;
                        aO._$4P = G.createString(aT, aV, aK - aV);
                    } else {
                        if (G.startsWith(aT, aV, ao._$ar)) {
                            aO._$4P = G.createString(aT, aV + 7, aK - aV - 7);
                            if (G.startsWith(aT, aV + 7, "ANCHOR_X")) {
                                aO._$RP = t._$xs;
                            } else {
                                if (G.startsWith(aT, aV + 7, "ANCHOR_Y")) {
                                    aO._$RP = t._$us;
                                } else {
                                    if (G.startsWith(aT, aV + 7, "SCALE_X")) {
                                        aO._$RP = t._$qs;
                                    } else {
                                        if (G.startsWith(aT, aV + 7, "SCALE_Y")) {
                                            aO._$RP = t._$Ys;
                                        } else {
                                            if (G.startsWith(aT, aV + 7, "X")) {
                                                aO._$RP = t._$ws;
                                            } else {
                                                if (G.startsWith(aT, aV + 7, "Y")) {
                                                    aO._$RP = t._$Ns;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            aO._$RP = t._$Fr;
                            aO._$4P = G.createString(aT, aV, aK - aV);
                        }
                    }
                    aN.motions.push(aO);
                    var aU = 0;
                    var aR = [];
                    for (aJ = aK + 1; aJ < aQ; ++aJ) {
                        aS = p(aT, aJ);
                        if (aS == "\r" || aS == "\n") {
                            break;
                        }
                        if (aS == "," || aS == " " || aS == "\t") {
                            continue;
                        }
                        var aM = G._$LS(aT, aQ, aJ, aI);
                        if (aI[0] > 0) {
                            aR.push(aM);
                            aU++;
                            var aH = aI[0];
                            if (aH < aJ) {
                                console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                                break;
                            }
                            aJ = aH - 1;
                        }
                    }
                    aO._$I0 = new Float32Array(aR);
                    if (aU > aN._$yT) {
                        aN._$yT = aU;
                    }
                }
            }
        }
        aN._$rr = ((1000 * aN._$yT) / aN._$D0) | 0;
        return aN;
    };
    ao.prototype.getDurationMSec = function () {
        return this._$E ? -1 : this._$rr;
    };
    ao.prototype.getLoopDurationMSec = function () {
        return this._$rr;
    };
    ao.prototype.dump = function () {
        for (var aJ = 0; aJ < this.motions.length; aJ++) {
            var aH = this.motions[aJ];
            console.log("_$wL[%s] [%d]. ", aH._$4P, aH._$I0.length);
            for (var aI = 0; aI < aH._$I0.length && aI < 10; aI++) {
                console.log("%5.2f ,", aH._$I0[aI]);
            }
            console.log("\n");
        }
    };
    ao.prototype.updateParamExe = function (aJ, aN, aQ, a3) {
        var aO = aN - a3._$z2;
        var a0 = (aO * this._$D0) / 1000;
        var aK = a0 | 0;
        var aR = a0 - aK;
        for (var aZ = 0; aZ < this.motions.length; aZ++) {
            var aV = this.motions[aZ];
            var aL = aV._$I0.length;
            var aT = aV._$4P;
            if (aV._$RP == t._$hs) {
                var aX = aV._$I0[aK >= aL ? aL - 1 : aK];
                aJ.setParamFloat(aT, aX);
            } else {
                if (t._$ws <= aV._$RP && aV._$RP <= t._$Ys) {
                } else {
                    var aH = aJ.getParamIndex(aT);
                    var a4 = aJ.getModelContext();
                    var aY = a4.getParamMax(aH);
                    var aW = a4.getParamMin(aH);
                    var aM = 0.4;
                    var aS = aM * (aY - aW);
                    var aU = a4.getParamFloat(aH);
                    var a2 = aV._$I0[aK >= aL ? aL - 1 : aK];
                    var a1 = aV._$I0[aK + 1 >= aL ? aL - 1 : aK + 1];
                    var aI;
                    if ((a2 < a1 && a1 - a2 > aS) || (a2 > a1 && a2 - a1 > aS)) {
                        aI = a2;
                    } else {
                        aI = a2 + (a1 - a2) * aR;
                    }
                    var aP = aU + (aI - aU) * aQ;
                    aJ.setParamFloat(aT, aP);
                }
            }
        }
        if (aK >= this._$yT) {
            if (this._$E) {
                a3._$z2 = aN;
                if (this.loopFadeIn) {
                    a3._$bs = aN;
                }
            } else {
                a3._$9L = true;
            }
        }
        this._$eP = aQ;
    };
    ao.prototype._$r0 = function () {
        return this._$E;
    };
    ao.prototype._$aL = function (aH) {
        this._$E = aH;
    };
    ao.prototype._$S0 = function () {
        return this._$D0;
    };
    ao.prototype._$U0 = function (aH) {
        this._$D0 = aH;
    };
    ao.prototype.isLoopFadeIn = function () {
        return this.loopFadeIn;
    };
    ao.prototype.setLoopFadeIn = function (aH) {
        this.loopFadeIn = aH;
    };
    function aE() {
        this._$P = new Float32Array(100);
        this.size = 0;
    }
    aE.prototype.clear = function () {
        this.size = 0;
    };
    aE.prototype.add = function (aI) {
        if (this._$P.length <= this.size) {
            var aH = new Float32Array(this.size * 2);
            P._$jT(this._$P, 0, aH, 0, this.size);
            this._$P = aH;
        }
        this._$P[this.size++] = aI;
    };
    aE.prototype._$BL = function () {
        var aH = new Float32Array(this.size);
        P._$jT(this._$P, 0, aH, 0, this.size);
        return aH;
    };
    function t() {
        this._$4P = null;
        this._$I0 = null;
        this._$RP = null;
    }
    t._$Fr = 0;
    t._$hs = 1;
    t._$ws = 100;
    t._$Ns = 101;
    t._$xs = 102;
    t._$us = 103;
    t._$qs = 104;
    t._$Ys = 105;
    function E() {
        if (j) {
            return;
        }
        c.prototype.constructor.call(this);
        this._$o = 0;
        this._$A = 0;
        this._$GS = null;
        this._$Eo = null;
    }
    E.prototype = new c();
    E._$gT = new Array();
    E.prototype._$zP = function () {
        this._$GS = new g();
        this._$GS._$zP();
    };
    E.prototype._$F0 = function (aH) {
        c.prototype._$F0.call(this, aH);
        this._$A = aH._$6L();
        this._$o = aH._$6L();
        this._$GS = aH._$nP();
        this._$Eo = aH._$nP();
        c.prototype.readV2_opacity.call(this, aH);
    };
    E.prototype.init = function (aH) {
        var aI = new H(this);
        var aJ = (this._$o + 1) * (this._$A + 1);
        if (aI._$Cr != null) {
            aI._$Cr = null;
        }
        aI._$Cr = new Float32Array(aJ * 2);
        if (aI._$hr != null) {
            aI._$hr = null;
        }
        if (this._$32()) {
            aI._$hr = new Float32Array(aJ * 2);
        } else {
            aI._$hr = null;
        }
        return aI;
    };
    E.prototype._$Nr = function (aJ, aI) {
        var aK = aI;
        if (!this._$GS._$Ur(aJ)) {
            return;
        }
        var aL = this._$VT();
        var aH = E._$gT;
        aH[0] = false;
        aG._$Vr(aJ, this._$GS, aH, aL, this._$Eo, aK._$Cr, 0, 2);
        aI._$Ib(aH[0]);
        this.interpolateOpacity(aJ, this._$GS, aI, aH);
    };
    E.prototype._$2b = function (aK, aJ) {
        var aL = aJ;
        aL._$hS(true);
        if (!this._$32()) {
            aL.setTotalOpacity(aL.getInterpolatedOpacity());
        } else {
            var aH = this.getTargetBaseDataID();
            if (aL._$8r == c._$ur) {
                aL._$8r = aK.getBaseDataIndex(aH);
            }
            if (aL._$8r < 0) {
                if (Q._$so) {
                    q._$li("_$L _$0P _$G :: %s", aH);
                }
                aL._$hS(false);
            } else {
                var aN = aK.getBaseData(aL._$8r);
                var aI = aK._$q2(aL._$8r);
                if (aN != null && aI._$yo()) {
                    var aM = aI.getTotalScale();
                    aL.setTotalScale_notForClient(aM);
                    var aO = aI.getTotalOpacity();
                    aL.setTotalOpacity(aO * aL.getInterpolatedOpacity());
                    aN._$nb(aK, aI, aL._$Cr, aL._$hr, this._$VT(), 0, 2);
                    aL._$hS(true);
                } else {
                    aL._$hS(false);
                }
            }
        }
    };
    E.prototype._$nb = function (aL, aI, aH, aM, aO, aK, aJ) {
        if (true) {
            var aN = aI;
            var aP = aN._$hr != null ? aN._$hr : aN._$Cr;
            E.transformPoints_sdk2(aH, aM, aO, aK, aJ, aP, this._$o, this._$A);
        } else {
            this.transformPoints_sdk1(aL, aI, aH, aM, aO, aK, aJ);
        }
    };
    E.transformPoints_sdk2 = function (a0, bc, a5, aP, aI, aR, aQ, aU) {
        var aW = a5 * aI;
        var aV;
        var bn, bm;
        var aT = 0;
        var aS = 0;
        var bl = 0;
        var bk = 0;
        var bf = 0;
        var be = 0;
        var aZ = false;
        for (var ba = aP; ba < aW; ba += aI) {
            var bd, a7, a4, aX;
            a4 = a0[ba];
            aX = a0[ba + 1];
            bd = a4 * aQ;
            a7 = aX * aU;
            if (bd < 0 || a7 < 0 || aQ <= bd || aU <= a7) {
                var a1 = aQ + 1;
                if (!aZ) {
                    aZ = true;
                    aT = 0.25 * (aR[(0 + 0 * a1) * 2] + aR[(aQ + 0 * a1) * 2] + aR[(0 + aU * a1) * 2] + aR[(aQ + aU * a1) * 2]);
                    aS = 0.25 * (aR[(0 + 0 * a1) * 2 + 1] + aR[(aQ + 0 * a1) * 2 + 1] + aR[(0 + aU * a1) * 2 + 1] + aR[(aQ + aU * a1) * 2 + 1]);
                    var aM = aR[(aQ + aU * a1) * 2] - aR[(0 + 0 * a1) * 2];
                    var aL = aR[(aQ + aU * a1) * 2 + 1] - aR[(0 + 0 * a1) * 2 + 1];
                    var bh = aR[(aQ + 0 * a1) * 2] - aR[(0 + aU * a1) * 2];
                    var bg = aR[(aQ + 0 * a1) * 2 + 1] - aR[(0 + aU * a1) * 2 + 1];
                    bl = (aM + bh) * 0.5;
                    bk = (aL + bg) * 0.5;
                    bf = (aM - bh) * 0.5;
                    be = (aL - bg) * 0.5;
                    if (bl == 0 && bk == 0) {
                    }
                    if (bf == 0 && be == 0) {
                    }
                    aT -= 0.5 * (bl + bf);
                    aS -= 0.5 * (bk + be);
                }
                if (-2 < a4 && a4 < 3 && -2 < aX && aX < 3) {
                    if (a4 <= 0) {
                        if (aX <= 0) {
                            var a3 = aR[(0 + 0 * a1) * 2];
                            var a2 = aR[(0 + 0 * a1) * 2 + 1];
                            var a8 = aT - 2 * bl;
                            var a6 = aS - 2 * bk;
                            var aK = aT - 2 * bf;
                            var aJ = aS - 2 * be;
                            var aO = aT - 2 * bl - 2 * bf;
                            var aN = aS - 2 * bk - 2 * be;
                            var bj = 0.5 * (a4 - -2);
                            var bi = 0.5 * (aX - -2);
                            if (bj + bi <= 1) {
                                bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                            } else {
                                bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                            }
                        } else {
                            if (aX >= 1) {
                                var aK = aR[(0 + aU * a1) * 2];
                                var aJ = aR[(0 + aU * a1) * 2 + 1];
                                var aO = aT - 2 * bl + 1 * bf;
                                var aN = aS - 2 * bk + 1 * be;
                                var a3 = aT + 3 * bf;
                                var a2 = aS + 3 * be;
                                var a8 = aT - 2 * bl + 3 * bf;
                                var a6 = aS - 2 * bk + 3 * be;
                                var bj = 0.5 * (a4 - -2);
                                var bi = 0.5 * (aX - 1);
                                if (bj + bi <= 1) {
                                    bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                    bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                } else {
                                    bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                    bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                }
                            } else {
                                var aH = a7 | 0;
                                if (aH == aU) {
                                    aH = aU - 1;
                                }
                                var bj = 0.5 * (a4 - -2);
                                var bi = a7 - aH;
                                var bb = aH / aU;
                                var a9 = (aH + 1) / aU;
                                var aK = aR[(0 + aH * a1) * 2];
                                var aJ = aR[(0 + aH * a1) * 2 + 1];
                                var a3 = aR[(0 + (aH + 1) * a1) * 2];
                                var a2 = aR[(0 + (aH + 1) * a1) * 2 + 1];
                                var aO = aT - 2 * bl + bb * bf;
                                var aN = aS - 2 * bk + bb * be;
                                var a8 = aT - 2 * bl + a9 * bf;
                                var a6 = aS - 2 * bk + a9 * be;
                                if (bj + bi <= 1) {
                                    bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                    bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                } else {
                                    bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                    bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                }
                            }
                        }
                    } else {
                        if (1 <= a4) {
                            if (aX <= 0) {
                                var a8 = aR[(aQ + 0 * a1) * 2];
                                var a6 = aR[(aQ + 0 * a1) * 2 + 1];
                                var a3 = aT + 3 * bl;
                                var a2 = aS + 3 * bk;
                                var aO = aT + 1 * bl - 2 * bf;
                                var aN = aS + 1 * bk - 2 * be;
                                var aK = aT + 3 * bl - 2 * bf;
                                var aJ = aS + 3 * bk - 2 * be;
                                var bj = 0.5 * (a4 - 1);
                                var bi = 0.5 * (aX - -2);
                                if (bj + bi <= 1) {
                                    bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                    bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                } else {
                                    bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                    bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                }
                            } else {
                                if (aX >= 1) {
                                    var aO = aR[(aQ + aU * a1) * 2];
                                    var aN = aR[(aQ + aU * a1) * 2 + 1];
                                    var aK = aT + 3 * bl + 1 * bf;
                                    var aJ = aS + 3 * bk + 1 * be;
                                    var a8 = aT + 1 * bl + 3 * bf;
                                    var a6 = aS + 1 * bk + 3 * be;
                                    var a3 = aT + 3 * bl + 3 * bf;
                                    var a2 = aS + 3 * bk + 3 * be;
                                    var bj = 0.5 * (a4 - 1);
                                    var bi = 0.5 * (aX - 1);
                                    if (bj + bi <= 1) {
                                        bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                        bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                    } else {
                                        bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                        bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                    }
                                } else {
                                    var aH = a7 | 0;
                                    if (aH == aU) {
                                        aH = aU - 1;
                                    }
                                    var bj = 0.5 * (a4 - 1);
                                    var bi = a7 - aH;
                                    var bb = aH / aU;
                                    var a9 = (aH + 1) / aU;
                                    var aO = aR[(aQ + aH * a1) * 2];
                                    var aN = aR[(aQ + aH * a1) * 2 + 1];
                                    var a8 = aR[(aQ + (aH + 1) * a1) * 2];
                                    var a6 = aR[(aQ + (aH + 1) * a1) * 2 + 1];
                                    var aK = aT + 3 * bl + bb * bf;
                                    var aJ = aS + 3 * bk + bb * be;
                                    var a3 = aT + 3 * bl + a9 * bf;
                                    var a2 = aS + 3 * bk + a9 * be;
                                    if (bj + bi <= 1) {
                                        bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                        bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                    } else {
                                        bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                        bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                    }
                                }
                            }
                        } else {
                            if (aX <= 0) {
                                var aY = bd | 0;
                                if (aY == aQ) {
                                    aY = aQ - 1;
                                }
                                var bj = bd - aY;
                                var bi = 0.5 * (aX - -2);
                                var bp = aY / aQ;
                                var bo = (aY + 1) / aQ;
                                var a8 = aR[(aY + 0 * a1) * 2];
                                var a6 = aR[(aY + 0 * a1) * 2 + 1];
                                var a3 = aR[(aY + 1 + 0 * a1) * 2];
                                var a2 = aR[(aY + 1 + 0 * a1) * 2 + 1];
                                var aO = aT + bp * bl - 2 * bf;
                                var aN = aS + bp * bk - 2 * be;
                                var aK = aT + bo * bl - 2 * bf;
                                var aJ = aS + bo * bk - 2 * be;
                                if (bj + bi <= 1) {
                                    bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                    bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                } else {
                                    bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                    bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                }
                            } else {
                                if (aX >= 1) {
                                    var aY = bd | 0;
                                    if (aY == aQ) {
                                        aY = aQ - 1;
                                    }
                                    var bj = bd - aY;
                                    var bi = 0.5 * (aX - 1);
                                    var bp = aY / aQ;
                                    var bo = (aY + 1) / aQ;
                                    var aO = aR[(aY + aU * a1) * 2];
                                    var aN = aR[(aY + aU * a1) * 2 + 1];
                                    var aK = aR[(aY + 1 + aU * a1) * 2];
                                    var aJ = aR[(aY + 1 + aU * a1) * 2 + 1];
                                    var a8 = aT + bp * bl + 3 * bf;
                                    var a6 = aS + bp * bk + 3 * be;
                                    var a3 = aT + bo * bl + 3 * bf;
                                    var a2 = aS + bo * bk + 3 * be;
                                    if (bj + bi <= 1) {
                                        bc[ba] = aO + (aK - aO) * bj + (a8 - aO) * bi;
                                        bc[ba + 1] = aN + (aJ - aN) * bj + (a6 - aN) * bi;
                                    } else {
                                        bc[ba] = a3 + (a8 - a3) * (1 - bj) + (aK - a3) * (1 - bi);
                                        bc[ba + 1] = a2 + (a6 - a2) * (1 - bj) + (aJ - a2) * (1 - bi);
                                    }
                                } else {
                                    System.err.printf("_$li calc : %.4f , %.4f					@@BDBoxGrid\n", a4, aX);
                                }
                            }
                        }
                    }
                } else {
                    bc[ba] = aT + a4 * bl + aX * bf;
                    bc[ba + 1] = aS + a4 * bk + aX * be;
                }
            } else {
                bn = bd - (bd | 0);
                bm = a7 - (a7 | 0);
                aV = 2 * ((bd | 0) + (a7 | 0) * (aQ + 1));
                if (bn + bm < 1) {
                    bc[ba] = aR[aV] * (1 - bn - bm) + aR[aV + 2] * bn + aR[aV + 2 * (aQ + 1)] * bm;
                    bc[ba + 1] = aR[aV + 1] * (1 - bn - bm) + aR[aV + 3] * bn + aR[aV + 2 * (aQ + 1) + 1] * bm;
                } else {
                    bc[ba] = aR[aV + 2 * (aQ + 1) + 2] * (bn - 1 + bm) + aR[aV + 2 * (aQ + 1)] * (1 - bn) + aR[aV + 2] * (1 - bm);
                    bc[ba + 1] = aR[aV + 2 * (aQ + 1) + 3] * (bn - 1 + bm) + aR[aV + 2 * (aQ + 1) + 1] * (1 - bn) + aR[aV + 3] * (1 - bm);
                }
            }
        }
    };
    E.prototype.transformPoints_sdk1 = function (aJ, aR, aL, a0, aU, aP, aZ) {
        var aH = aR;
        var aO, aN;
        var aM = this._$o;
        var aQ = this._$A;
        var aI = aU * aZ;
        var aS, aY;
        var aV;
        var aX, aW;
        var aT = aH._$hr != null ? aH._$hr : aH._$Cr;
        for (var aK = aP; aK < aI; aK += aZ) {
            if (Q._$ts) {
                aO = aL[aK];
                aN = aL[aK + 1];
                if (aO < 0) {
                    aO = 0;
                } else {
                    if (aO > 1) {
                        aO = 1;
                    }
                }
                if (aN < 0) {
                    aN = 0;
                } else {
                    if (aN > 1) {
                        aN = 1;
                    }
                }
                aO *= aM;
                aN *= aQ;
                aS = aO | 0;
                aY = aN | 0;
                if (aS > aM - 1) {
                    aS = aM - 1;
                }
                if (aY > aQ - 1) {
                    aY = aQ - 1;
                }
                aX = aO - aS;
                aW = aN - aY;
                aV = 2 * (aS + aY * (aM + 1));
            } else {
                aO = aL[aK] * aM;
                aN = aL[aK + 1] * aQ;
                aX = aO - (aO | 0);
                aW = aN - (aN | 0);
                aV = 2 * ((aO | 0) + (aN | 0) * (aM + 1));
            }
            if (aX + aW < 1) {
                a0[aK] = aT[aV] * (1 - aX - aW) + aT[aV + 2] * aX + aT[aV + 2 * (aM + 1)] * aW;
                a0[aK + 1] = aT[aV + 1] * (1 - aX - aW) + aT[aV + 3] * aX + aT[aV + 2 * (aM + 1) + 1] * aW;
            } else {
                a0[aK] = aT[aV + 2 * (aM + 1) + 2] * (aX - 1 + aW) + aT[aV + 2 * (aM + 1)] * (1 - aX) + aT[aV + 2] * (1 - aW);
                a0[aK + 1] = aT[aV + 2 * (aM + 1) + 3] * (aX - 1 + aW) + aT[aV + 2 * (aM + 1) + 1] * (1 - aX) + aT[aV + 3] * (1 - aW);
            }
        }
    };
    E.prototype._$VT = function () {
        return (this._$o + 1) * (this._$A + 1);
    };
    E.prototype.getType = function () {
        return c._$_b;
    };
    function H(aH) {
        B.prototype.constructor.call(this, aH);
        this._$8r = c._$ur;
        this._$Cr = null;
        this._$hr = null;
    }
    H.prototype = new B();
    function s() {
        if (j) {
            return;
        }
        this.visible = true;
        this._$g0 = false;
        this._$NL = null;
        this._$3S = null;
        this._$aS = null;
        s._$42++;
    }
    s._$42 = 0;
    s.prototype._$zP = function () {
        this._$3S = new Array();
        this._$aS = new Array();
    };
    s.prototype._$F0 = function (aH) {
        this._$g0 = aH._$8L();
        this.visible = aH._$8L();
        this._$NL = aH._$nP();
        this._$3S = aH._$nP();
        this._$aS = aH._$nP();
    };
    s.prototype.init = function (aI) {
        var aH = new aj(this);
        aH.setPartsOpacity(this.isVisible() ? 1 : 0);
        return aH;
    };
    s.prototype._$6o = function (aH) {
        if (this._$3S == null) {
            throw new Error("_$3S _$6 _$Wo@_$6o");
        }
        this._$3S.push(aH);
    };
    s.prototype._$3o = function (aH) {
        if (this._$aS == null) {
            throw new Error("_$aS _$6 _$Wo@_$3o");
        }
        this._$aS.push(aH);
    };
    s.prototype._$Zo = function (aH) {
        this._$3S = aH;
    };
    s.prototype._$xo = function (aH) {
        this._$aS = aH;
    };
    s.prototype.isVisible = function () {
        return this.visible;
    };
    s.prototype._$uL = function () {
        return this._$g0;
    };
    s.prototype._$KP = function (aH) {
        this.visible = aH;
    };
    s.prototype._$ET = function (aH) {
        this._$g0 = aH;
    };
    s.prototype.getBaseData = function () {
        return this._$3S;
    };
    s.prototype.getDrawData = function () {
        return this._$aS;
    };
    s.prototype._$p2 = function () {
        return this._$NL;
    };
    s.prototype._$ob = function (aH) {
        this._$NL = aH;
    };
    s.prototype.getPartsID = function () {
        return this._$NL;
    };
    s.prototype._$MP = function (aH) {
        this._$NL = aH;
    };
    function aj(aH) {
        this._$VS = null;
        this._$e0 = null;
        this._$e0 = aH;
    }
    aj.prototype = new S();
    aj.prototype.getPartsOpacity = function () {
        return this._$VS;
    };
    aj.prototype.setPartsOpacity = function (aH) {
        this._$VS = aH;
    };
    function ak(aH) {
        if (j) {
            return;
        }
        this.id = aH;
    }
    ak._$L7 = function () {
        z._$27();
        n._$27();
        Z._$27();
        i._$27();
    };
    ak.prototype.toString = function () {
        return this.id;
    };
    function D() { }
    D.prototype._$F0 = function (aH) { };
    function an() {
        if (j) {
            return;
        }
        this._$4S = null;
    }
    an.prototype._$1s = function () {
        return this._$4S;
    };
    an.prototype._$zP = function () {
        this._$4S = new Array();
    };
    an.prototype._$F0 = function (aH) {
        this._$4S = aH._$nP();
    };
    an.prototype._$Ks = function (aH) {
        this._$4S.push(aH);
    };
    function au(aH, aI) {
        this.canvas = aH;
        this.context = aI;
        this.viewport = new Array(0, 0, aH.width, aH.height);
        this._$6r = 1;
        this._$xP = 0;
        this._$3r = 1;
        this._$uP = 0;
        this._$Qo = -1;
        this.cacheImages = {};
    }
    au.tr = new am();
    au._$50 = new am();
    au._$Ti = new Array(0, 0);
    au._$Pi = new Array(0, 0);
    au._$B = new Array(0, 0);
    au.prototype._$lP = function (aI, aK, aJ, aH) {
        this.viewport = new Array(aI, aK, aJ, aH);
    };
    au.prototype._$bL = function () {
        this.context.save();
        var aH = this.viewport;
        if (aH != null) {
            this.context.beginPath();
            this.context._$Li(aH[0], aH[1], aH[2], aH[3]);
            this.context.clip();
        }
    };
    au.prototype._$ei = function () {
        this.context.restore();
    };
    au.prototype.drawElements = function (bc, bm, aX, aJ, bA, aM, bl, bz) {
        try {
            if (bA != this._$Qo) {
                this._$Qo = bA;
                this.context.globalAlpha = bA;
            }
            var a2 = bm.length;
            var aP = bc.width;
            var a5 = bc.height;
            var bE = this.context;
            var a7 = this._$xP;
            var a6 = this._$uP;
            var a1 = this._$6r;
            var aZ = this._$3r;
            var bD = au.tr;
            var aI = au._$Ti;
            var aH = au._$Pi;
            var bu = au._$B;
            for (var by = 0; by < a2; by += 3) {
                bE.save();
                var aW = bm[by];
                var aV = bm[by + 1];
                var aT = bm[by + 2];
                var aL = a7 + a1 * aX[aW * 2];
                var aK = a6 + aZ * aX[aW * 2 + 1];
                var br = a7 + a1 * aX[aV * 2];
                var bp = a6 + aZ * aX[aV * 2 + 1];
                var bh = a7 + a1 * aX[aT * 2];
                var bf = a6 + aZ * aX[aT * 2 + 1];
                if (bl) {
                    bl._$PS(aL, aK, bu);
                    aL = bu[0];
                    aK = bu[1];
                    bl._$PS(br, bp, bu);
                    br = bu[0];
                    bp = bu[1];
                    bl._$PS(bh, bf, bu);
                    bh = bu[0];
                    bf = bu[1];
                }
                var aS = aP * aJ[aW * 2];
                var aQ = a5 - a5 * aJ[aW * 2 + 1];
                var bx = aP * aJ[aV * 2];
                var bw = a5 - a5 * aJ[aV * 2 + 1];
                var bk = aP * aJ[aT * 2];
                var bj = a5 - a5 * aJ[aT * 2 + 1];
                var a3 = Math.atan2(bw - aQ, bx - aS);
                var a0 = Math.atan2(bp - aK, br - aL);
                var aO = br - aL;
                var aN = bp - aK;
                var bi = Math.sqrt(aO * aO + aN * aN);
                var aU = bx - aS;
                var aR = bw - aQ;
                var bt = Math.sqrt(aU * aU + aR * aR);
                var bv = bi / bt;
                ad._$ni(bk, bj, aS, aQ, bx - aS, bw - aQ, -(bw - aQ), bx - aS, aI);
                ad._$ni(bh, bf, aL, aK, br - aL, bp - aK, -(bp - aK), br - aL, aH);
                var aY = (aH[0] - aI[0]) / aI[1];
                var bs = Math.min(aS, bx, bk);
                var bg = Math.max(aS, bx, bk);
                var bq = Math.min(aQ, bw, bj);
                var be = Math.max(aQ, bw, bj);
                var bo = Math.floor(bs);
                var bb = Math.floor(bq);
                var a4 = Math.ceil(bg);
                var bC = Math.ceil(be);
                bD.identity();
                bD.translate(aL, aK);
                bD.rotate(a0);
                bD.scale(1, aH[1] / aI[1]);
                bD.shear(aY, 0);
                bD.scale(bv, bv);
                bD.rotate(-a3);
                bD.translate(-aS, -aQ);
                bD.setContext(bE);
                var a8 = true;
                var a9 = 1.2;
                if (!aM) {
                    aM = a8 ? a9 : 0;
                }
                if (Q.IGNORE_EXPAND) {
                    aM = 0;
                }
                if (Q.USE_CACHED_POLYGON_IMAGE) {
                    var bd = bz._$e0;
                    bd.gl_cacheImage = bd.gl_cacheImage || {};
                    if (!bd.gl_cacheImage[by]) {
                        var bn = au.createCanvas(a4 - bo, bC - bb);
                        Q.DEBUG_DATA.LDGL_CANVAS_MB = Q.DEBUG_DATA.LDGL_CANVAS_MB || 0;
                        Q.DEBUG_DATA.LDGL_CANVAS_MB += (a4 - bo) * (bC - bb) * 4;
                        var ba = bn.getContext("2d");
                        ba.translate(-bo, -bb);
                        au.clip(ba, bD, aM, bi, aS, aQ, bx, bw, bk, bj, aL, aK, br, bp, bh, bf);
                        ba.drawImage(bc, 0, 0);
                        bd.gl_cacheImage[by] = { cacheCanvas: bn, cacheContext: ba };
                    }
                    bE.drawImage(bd.gl_cacheImage[by]["cacheCanvas"], bo, bb);
                } else {
                    if (!Q.IGNORE_CLIP) {
                        au.clip(bE, bD, aM, bi, aS, aQ, bx, bw, bk, bj, aL, aK, br, bp, bh, bf);
                    }
                    if (Q.USE_ADJUST_TRANSLATION) {
                        bs = 0;
                        bg = aP;
                        bq = 0;
                        be = a5;
                    }
                    bE.drawImage(bc, bs, bq, bg - bs, be - bq, bs, bq, bg - bs, be - bq);
                }
                bE.restore();
            }
        } catch (bB) {
            q._$Rb(bB);
        }
    };
    au.clip = function (aK, aJ, aV, aI, aM, aL, aU, aT, aQ, aP, aO, aN, aH, aW, aS, aR) {
        if (aV > 0.02) {
            au.expandClip(aK, aJ, aV, aI, aO, aN, aH, aW, aS, aR);
        } else {
            au.clipWithTransform(aK, null, aM, aL, aU, aT, aQ, aP);
        }
    };
    au.expandClip = function (aV, bg, aK, a3, aJ, aI, be, ba, aZ, aX) {
        var aP = be - aJ;
        var aO = ba - aI;
        var bi = aZ - aJ;
        var bh = aX - aI;
        var bj = aP * bh - aO * bi > 0 ? aK : -aK;
        var aL = -aO;
        var aH = aP;
        var bc = aZ - be;
        var a8 = aX - ba;
        var a7 = -a8;
        var a6 = bc;
        var aQ = Math.sqrt(bc * bc + a8 * a8);
        var bf = -bh;
        var bb = bi;
        var a2 = Math.sqrt(bi * bi + bh * bh);
        var bd = aJ - (bj * aL) / a3;
        var a9 = aI - (bj * aH) / a3;
        var aY = be - (bj * aL) / a3;
        var aW = ba - (bj * aH) / a3;
        var a5 = be - (bj * a7) / aQ;
        var a4 = ba - (bj * a6) / aQ;
        var aS = aZ - (bj * a7) / aQ;
        var aR = aX - (bj * a6) / aQ;
        var aN = aJ + (bj * bf) / a2;
        var aM = aI + (bj * bb) / a2;
        var a1 = aZ + (bj * bf) / a2;
        var a0 = aX + (bj * bb) / a2;
        var aU = au._$50;
        var aT = bg._$P2(aU);
        if (aT == null) {
            return false;
        }
        au.clipWithTransform(aV, aU, bd, a9, aY, aW, a5, a4, aS, aR, a1, a0, aN, aM);
        return true;
    };
    au.clipWithTransform = function (aH, aI, aS, aN, aQ, aK, aP, aJ) {
        if (arguments.length < 1 + 3 * 2) {
            q._$li("err : @LDGL.clip()");
            return;
        }
        if (!(arguments[1] instanceof am)) {
            q._$li("err : a[0] is _$6 LDTransform @LDGL.clip()");
            return;
        }
        var aM = au._$B;
        var aO = aI;
        var aR = arguments;
        aH.beginPath();
        if (aO) {
            aO._$PS(aR[2], aR[3], aM);
            aH.moveTo(aM[0], aM[1]);
            for (var aL = 4; aL < aR.length; aL += 2) {
                aO._$PS(aR[aL], aR[aL + 1], aM);
                aH.lineTo(aM[0], aM[1]);
            }
        } else {
            aH.moveTo(aR[2], aR[3]);
            for (var aL = 4; aL < aR.length; aL += 2) {
                aH.lineTo(aR[aL], aR[aL + 1]);
            }
        }
        aH.clip();
    };
    au.createCanvas = function (aH, aJ) {
        var aI = document.createElement("canvas");
        aI.setAttribute("width", aH);
        aI.setAttribute("height", aJ);
        if (!aI) {
            q._$li("err : " + aI);
        }
        return aI;
    };
    au.dumpValues = function () {
        var aI = "";
        for (var aH = 0; aH < arguments.length; aH++) {
            aI += "[" + aH + "]= " + arguments[aH].toFixed(3) + " , ";
        }
        console.log(aI);
    };
    function f() {
        if (j) {
            return;
        }
        this._$TT = null;
        this._$LT = null;
        this._$FS = null;
        this._$wL = null;
    }
    f.prototype._$F0 = function (aH) {
        this._$TT = aH._$_T();
        this._$LT = aH._$_T();
        this._$FS = aH._$_T();
        this._$wL = aH._$nP();
    };
    f.prototype.getMinValue = function () {
        return this._$TT;
    };
    f.prototype.getMaxValue = function () {
        return this._$LT;
    };
    f.prototype.getDefaultValue = function () {
        return this._$FS;
    };
    f.prototype.getParamID = function () {
        return this._$wL;
    };
    function B(aH) {
        if (j) {
            return;
        }
        this._$e0 = null;
        this._$IP = null;
        this._$JS = false;
        this._$AT = true;
        this._$e0 = aH;
        this.totalScale = 1;
        this._$7s = 1;
        this.totalOpacity = 1;
    }
    B.prototype._$yo = function () {
        return this._$AT && !this._$JS;
    };
    B.prototype._$hS = function (aH) {
        this._$AT = aH;
    };
    B.prototype._$GT = function () {
        return this._$e0;
    };
    B.prototype._$l2 = function (aH) {
        this._$IP = aH;
    };
    B.prototype.getPartsIndex = function () {
        return this._$IP;
    };
    B.prototype._$x2 = function () {
        return this._$JS;
    };
    B.prototype._$Ib = function (aH) {
        this._$JS = aH;
    };
    B.prototype.getTotalScale = function () {
        return this.totalScale;
    };
    B.prototype.setTotalScale_notForClient = function (aH) {
        this.totalScale = aH;
    };
    B.prototype.getInterpolatedOpacity = function () {
        return this._$7s;
    };
    B.prototype.setInterpolatedOpacity = function (aH) {
        this._$7s = aH;
    };
    B.prototype.getTotalOpacity = function (aH) {
        return this.totalOpacity;
    };
    B.prototype.setTotalOpacity = function (aH) {
        this.totalOpacity = aH;
    };
    function Q() { }
    Q._$2s = "2.1.00_1";
    Q._$Kr = 201001000;
    Q._$sP = true;
    Q._$so = true;
    Q._$cb = false;
    Q._$3T = true;
    Q._$Ts = true;
    Q._$fb = true;
    Q._$ts = true;
    Q.L2D_DEFORMER_EXTEND = true;
    Q._$Wb = false;
    Q._$yr = false;
    Q._$Zs = false;
    Q.L2D_NO_ERROR = 0;
    Q._$i7 = 1000;
    Q._$9s = 1001;
    Q._$es = 1100;
    Q._$r7 = 2000;
    Q._$07 = 2001;
    Q._$b7 = 2002;
    Q._$H7 = 4000;
    Q.L2D_COLOR_BLEND_MODE_MULT = 0;
    Q.L2D_COLOR_BLEND_MODE_ADD = 1;
    Q.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2;
    Q._$6b = true;
    Q._$cT = 0;
    Q.clippingMaskBufferSize = 256;
    Q.glContext = new Array();
    Q.frameBuffers = new Array();
    Q.fTexture = new Array();
    Q.IGNORE_CLIP = false;
    Q.IGNORE_EXPAND = false;
    Q.EXPAND_W = 2;
    Q.USE_ADJUST_TRANSLATION = true;
    Q.USE_CANVAS_TRANSFORM = true;
    Q.USE_CACHED_POLYGON_IMAGE = false;
    Q.DEBUG_DATA = {};
    Q.PROFILE_IOS_SPEED = { PROFILE_NAME: "iOS Speed", USE_ADJUST_TRANSLATION: true, USE_CACHED_POLYGON_IMAGE: true, EXPAND_W: 4 };
    Q.PROFILE_IOS_QUALITY = { PROFILE_NAME: "iOS HiQ", USE_ADJUST_TRANSLATION: true, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 };
    Q.PROFILE_IOS_DEFAULT = Q.PROFILE_IOS_QUALITY;
    Q.PROFILE_ANDROID = { PROFILE_NAME: "Android", USE_ADJUST_TRANSLATION: false, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 };
    Q.PROFILE_DESKTOP = { PROFILE_NAME: "Desktop", USE_ADJUST_TRANSLATION: false, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 };
    Q.initProfile = function () {
        if (r.isIOS()) {
            Q.setupProfile(Q.PROFILE_IOS_DEFAULT);
        } else {
            if (r.isAndroid()) {
                Q.setupProfile(Q.PROFILE_ANDROID);
            } else {
                Q.setupProfile(Q.PROFILE_DESKTOP);
            }
        }
    };
    Q.setupProfile = function (aI, aJ) {
        if (typeof aI == "number") {
            switch (aI) {
                case 9901:
                    aI = Q.PROFILE_IOS_SPEED;
                    break;
                case 9902:
                    aI = Q.PROFILE_IOS_QUALITY;
                    break;
                case 9903:
                    aI = Q.PROFILE_IOS_DEFAULT;
                    break;
                case 9904:
                    aI = Q.PROFILE_ANDROID;
                    break;
                case 9905:
                    aI = Q.PROFILE_DESKTOP;
                    break;
                default:
                    alert("profile _$6 _$Ui : " + aI);
                    break;
            }
        }
        if (arguments.length < 2) {
            aJ = true;
        }
        if (aJ) {
            console.log("profile : " + aI.PROFILE_NAME);
        }
        for (var aH in aI) {
            Q[aH] = aI[aH];
            if (aJ) {
                console.log("  [" + aH + "] = " + aI[aH]);
            }
        }
    };
    Q.init = function () {
        if (Q._$6b) {
            console.log("Live2D %s", Q._$2s);
            Q._$6b = false;
            var aH = false;
            aH = true;
            Q.initProfile();
        }
    };
    Q.getVersionStr = function () {
        return Q._$2s;
    };
    Q.getVersionNo = function () {
        return Q._$Kr;
    };
    Q._$sT = function (aH) {
        Q._$cT = aH;
    };
    Q.getError = function () {
        var aH = Q._$cT;
        Q._$cT = 0;
        return aH;
    };
    Q.dispose = function () {
        Q.glContext = [];
        Q.frameBuffers = [];
        Q.fTexture = [];
    };
    Q.setGL = function (aJ, aI) {
        var aH = aI || 0;
        Q.glContext[aH] = aJ;
    };
    Q.getGL = function (aH) {
        return Q.glContext[aH];
    };
    Q.setClippingMaskBufferSize = function (aH) {
        Q.clippingMaskBufferSize = aH;
    };
    Q.getClippingMaskBufferSize = function () {
        return Q.clippingMaskBufferSize;
    };
    Q.deleteBuffer = function (aI) {
        var aH = Q.getGL(aI);
        aH.deleteFramebuffer(Q.frameBuffers[aI].framebuffer);
        delete Q.frameBuffers[aI];
        delete Q.glContext[aI];
    };
    function A() { }
    A._$r2 = function (aH) {
        if (aH < 0) {
            return 0;
        } else {
            if (aH > 1) {
                return 1;
            }
        }
        return 0.5 - 0.5 * Math.cos(aH * aC.PI_F);
    };
    function J(aH) {
        if (j) {
            return;
        }
        this._$ib = aH;
    }
    J._$fr = -1;
    J.prototype.toString = function () {
        return this._$ib;
    };
    function b() {
        if (j) {
            return;
        }
        a.prototype.constructor.call(this);
        this._$LP = -1;
        this._$d0 = 0;
        this._$Yo = 0;
        this._$JP = null;
        this._$5P = null;
        this._$BP = null;
        this._$Eo = null;
        this._$Qi = null;
        this._$6s = b._$ms;
        this.culling = true;
        this.gl_cacheImage = null;
        this.instanceNo = b._$42++;
    }
    b.prototype = new a();
    b._$42 = 0;
    b._$Os = 30;
    b._$ms = 0;
    b._$ns = 1;
    b._$_s = 2;
    b._$gT = new Array();
    b.prototype._$_S = function (aH) {
        this._$LP = aH;
    };
    b.prototype.getTextureNo = function () {
        return this._$LP;
    };
    b.prototype._$ZL = function () {
        return this._$Qi;
    };
    b.prototype._$H2 = function () {
        return this._$JP;
    };
    b.prototype.getNumPoints = function () {
        return this._$d0;
    };
    b.prototype.getType = function () {
        return a._$wb;
    };
    b.prototype._$B2 = function (aL, aH, aO) {
        var aM = aH;
        var aN = aM._$hr != null ? aM._$hr : aM._$Cr;
        var aK = aw._$do;
        switch (aK) {
            default:
            case aw._$Ms:
                throw new Error("_$L _$ro ");
            case aw._$Qs:
                for (var aJ = this._$d0 - 1; aJ >= 0; --aJ) {
                    var aI = aJ * aw._$No;
                    aN[aI + 4] = aO;
                }
                break;
        }
    };
    b.prototype._$zP = function () {
        this._$GS = new g();
        this._$GS._$zP();
    };
    b.prototype._$F0 = function (aK) {
        a.prototype._$F0.call(this, aK);
        this._$LP = aK._$6L();
        this._$d0 = aK._$6L();
        this._$Yo = aK._$6L();
        var aH = aK._$nP();
        this._$BP = new Int16Array(this._$Yo * 3);
        for (var aJ = this._$Yo * 3 - 1; aJ >= 0; --aJ) {
            this._$BP[aJ] = aH[aJ];
        }
        this._$Eo = aK._$nP();
        this._$Qi = aK._$nP();
        if (aK.getFormatVersion() >= ay._$s7) {
            this._$JP = aK._$6L();
            if (this._$JP != 0) {
                if ((this._$JP & 1) != 0) {
                    var aI = aK._$6L();
                    if (this._$5P == null) {
                        this._$5P = new Object();
                    }
                    this._$5P._$Hb = parseInt(aI);
                }
                if ((this._$JP & b._$Os) != 0) {
                    this._$6s = (this._$JP & b._$Os) >> 1;
                } else {
                    this._$6s = b._$ms;
                }
                if ((this._$JP & 32) != 0) {
                    this.culling = false;
                }
            }
        } else {
            this._$JP = 0;
        }
    };
    b.prototype.init = function (aL) {
        var aN = new ag(this);
        var aI = this._$d0 * aw._$No;
        var aH = this._$32();
        if (aN._$Cr != null) {
            aN._$Cr = null;
        }
        aN._$Cr = new Float32Array(aI);
        if (aN._$hr != null) {
            aN._$hr = null;
        }
        aN._$hr = aH ? new Float32Array(aI) : null;
        var aM = aw._$do;
        switch (aM) {
            default:
            case aw._$Ms:
                if (aw._$Ls) {
                    for (var aJ = this._$d0 - 1; aJ >= 0; --aJ) {
                        var aO = aJ << 1;
                        this._$Qi[aO + 1] = 1 - this._$Qi[aO + 1];
                    }
                }
                break;
            case aw._$Qs:
                for (var aJ = this._$d0 - 1; aJ >= 0; --aJ) {
                    var aO = aJ << 1;
                    var aK = aJ * aw._$No;
                    var aQ = this._$Qi[aO];
                    var aP = this._$Qi[aO + 1];
                    aN._$Cr[aK] = aQ;
                    aN._$Cr[aK + 1] = aP;
                    aN._$Cr[aK + 4] = 0;
                    if (aH) {
                        aN._$hr[aK] = aQ;
                        aN._$hr[aK + 1] = aP;
                        aN._$hr[aK + 4] = 0;
                    }
                }
                break;
        }
        return aN;
    };
    b.prototype._$Nr = function (aJ, aH) {
        var aK = aH;
        if (!(this == aK._$GT())) {
            console.log("### assert!! ### ");
        }
        if (!this._$GS._$Ur(aJ)) {
            return;
        }
        a.prototype._$Nr.call(this, aJ, aK);
        if (aK._$IS[0]) {
            return;
        }
        var aI = b._$gT;
        aI[0] = false;
        aG._$Vr(aJ, this._$GS, aI, this._$d0, this._$Eo, aK._$Cr, aw._$i2, aw._$No);
    };
    b.prototype._$2b = function (aK, aI) {
        try {
            if (!(this == aI._$GT())) {
                console.log("### assert!! ### ");
            }
            var aL = false;
            if (aI._$IS[0]) {
                aL = true;
            }
            var aM = aI;
            if (!aL) {
                a.prototype._$2b.call(this, aK);
                if (this._$32()) {
                    var aH = this.getTargetBaseDataID();
                    if (aM._$8r == a._$ur) {
                        aM._$8r = aK.getBaseDataIndex(aH);
                    }
                    if (aM._$8r < 0) {
                        if (Q._$so) {
                            q._$li("_$L _$0P _$G :: %s", aH);
                        }
                    } else {
                        var aO = aK.getBaseData(aM._$8r);
                        var aJ = aK._$q2(aM._$8r);
                        if (aO != null && !aJ._$x2()) {
                            aO._$nb(aK, aJ, aM._$Cr, aM._$hr, this._$d0, aw._$i2, aw._$No);
                            aM._$AT = true;
                        } else {
                            aM._$AT = false;
                        }
                        aM.baseOpacity = aJ.getTotalOpacity();
                    }
                }
            }
        } catch (aN) {
            throw aN;
        }
    };
    b.prototype.draw = function (aN, aK, aI) {
        if (!(this == aI._$GT())) {
            console.log("### assert!! ### ");
        }
        if (aI._$IS[0]) {
            return;
        }
        var aL = aI;
        var aJ = this._$LP;
        if (aJ < 0) {
            aJ = 1;
        }
        var aH = this.getOpacity(aK, aL) * aI._$VS * aI.baseOpacity;
        var aM = aL._$hr != null ? aL._$hr : aL._$Cr;
        aN.setClipBufPre_clipContextForDraw(aI.clipBufPre_clipContext);
        aN._$WP(this.culling);
        aN._$Uo(aJ, 3 * this._$Yo, this._$BP, aM, this._$Qi, aH, this._$6s, aL);
    };
    b.prototype.dump = function () {
        console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo);
        console.log("  _$Oi _$di = { ");
        for (var aJ = 0; aJ < this._$BP.length; aJ++) {
            console.log("%5d ,", this._$BP[aJ]);
        }
        console.log("\n  _$5i _$30");
        for (var aJ = 0; aJ < this._$Eo.length; aJ++) {
            console.log("\n    _$30[%d] = ", aJ);
            var aH = this._$Eo[aJ];
            for (var aI = 0; aI < aH.length; aI++) {
                console.log("%6.2f, ", aH[aI]);
            }
        }
        console.log("\n");
    };
    b.prototype._$72 = function (aH) {
        if (this._$5P == null) {
            return null;
        }
        return this._$5P[aH];
    };
    b.prototype.getIndexArray = function () {
        return this._$BP;
    };
    function ag(aH) {
        aB.prototype.constructor.call(this, aH);
        this._$8r = a._$ur;
        this._$Cr = null;
        this._$hr = null;
    }
    ag.prototype = new aB();
    ag.prototype.getTransformedPoints = function () {
        return this._$hr != null ? this._$hr : this._$Cr;
    };
    function k() {
        if (j) {
            return;
        }
        this.x = null;
        this.y = null;
    }
    k.prototype._$HT = function (aH) {
        this.x = aH.x;
        this.y = aH.y;
    };
    k.prototype._$HT = function (aH, aI) {
        this.x = aH;
        this.y = aI;
    };
    function l(aH) {
        if (j) {
            return;
        }
        aa.prototype.constructor.call(this);
        this.drawParamWebGL = new C(aH);
        this.drawParamWebGL.setGL(Q.getGL(aH));
    }
    l.prototype = new aa();
    l.loadModel = function (aI) {
        var aH = new l();
        aa._$62(aH, aI);
        return aH;
    };
    l.loadModel = function (aI, aK) {
        var aJ = aK || 0;
        var aH = new l(aJ);
        aa._$62(aH, aI);
        return aH;
    };
    l._$to = function () {
        var aH = new l();
        return aH;
    };
    l._$er = function (aM) {
        var aJ = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
        if (aJ.exists() == false) {
            throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + aJ._$PL());
        }
        var aH = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"];
        var aK = l.loadModel(aJ._$3b());
        for (var aI = 0; aI < aH.length; aI++) {
            var aL = new _$5(aH[aI]);
            if (aL.exists() == false) {
                throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + aL._$PL());
            }
            aK.setTexture(aI, _$nL._$_o(aM, aL._$3b()));
        }
        return aK;
    };
    l.prototype.setGL = function (aH) {
        Q.setGL(aH);
    };
    l.prototype.setTransform = function (aH) {
        this.drawParamWebGL.setTransform(aH);
    };
    l.prototype.update = function () {
        this._$5S.update();
        this._$5S.preDraw(this.drawParamWebGL);
    };
    l.prototype.draw = function () {
        this._$5S.draw(this.drawParamWebGL);
    };
    l.prototype._$K2 = function () {
        this.drawParamWebGL._$K2();
    };
    l.prototype.setTexture = function (aI, aH) {
        if (this.drawParamWebGL == null) {
            q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");
        }
        this.drawParamWebGL.setTexture(aI, aH);
    };
    l.prototype.setTexture = function (aI, aH) {
        if (this.drawParamWebGL == null) {
            q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");
        }
        this.drawParamWebGL.setTexture(aI, aH);
    };
    l.prototype._$Rs = function () {
        return this.drawParamWebGL._$Rs();
    };
    l.prototype._$Ds = function (aH) {
        this.drawParamWebGL._$Ds(aH);
    };
    l.prototype.getDrawParam = function () {
        return this.drawParamWebGL;
    };
    l.prototype.setMatrix = function (aH) {
        this.drawParamWebGL.setMatrix(aH);
    };
    l.prototype.setPremultipliedAlpha = function (aH) {
        this.drawParamWebGL.setPremultipliedAlpha(aH);
    };
    l.prototype.isPremultipliedAlpha = function () {
        return this.drawParamWebGL.isPremultipliedAlpha();
    };
    l.prototype.setAnisotropy = function (aH) {
        this.drawParamWebGL.setAnisotropy(aH);
    };
    l.prototype.getAnisotropy = function () {
        return this.drawParamWebGL.getAnisotropy();
    };
    function V() {
        if (j) {
            return;
        }
        this.motions = null;
        this._$eb = false;
        this.motions = new Array();
    }
    V.prototype._$tb = function () {
        return this.motions;
    };
    V.prototype.startMotion = function (aJ, aI) {
        var aM = null;
        var aL = null;
        var aH = this.motions.length;
        for (var aK = 0; aK < aH; ++aK) {
            aL = this.motions[aK];
            if (aL == null) {
                continue;
            }
            aL._$qS(aL._$w0.getFadeOut());
            if (this._$eb) {
                q._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", aH, aL._$sr);
            }
        }
        if (aJ == null) {
            return -1;
        }
        aL = new M();
        aL._$w0 = aJ;
        this.motions.push(aL);
        var aN = aL._$sr;
        if (this._$eb) {
            q._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", aH, aN);
        }
        return aN;
    };
    V.prototype.updateParam = function (aJ) {
        try {
            var aI = false;
            for (var aK = 0; aK < this.motions.length; aK++) {
                var aL = this.motions[aK];
                if (aL == null) {
                    this.motions.splice(aK, 1);
                    aK--;
                    continue;
                }
                var aH = aL._$w0;
                if (aH == null) {
                    this.motions = this.motions.splice(aK, 1);
                    aK--;
                    continue;
                }
                aH.updateParam(aJ, aL);
                aI = true;
                if (aL.isFinished()) {
                    if (this._$eb) {
                        q._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, aL._$sr);
                    }
                    this.motions.splice(aK, 1);
                    aK--;
                } else {
                }
            }
            return aI;
        } catch (aM) {
            q._$li(aM);
            return true;
        }
    };
    V.prototype.isFinished = function (aK) {
        if (arguments.length >= 1) {
            for (var aI = 0; aI < this.motions.length; aI++) {
                var aJ = this.motions[aI];
                if (aJ == null) {
                    continue;
                }
                if (aJ._$sr == aK && !aJ.isFinished()) {
                    return false;
                }
            }
            return true;
        } else {
            for (var aI = 0; aI < this.motions.length; aI++) {
                var aJ = this.motions[aI];
                if (aJ == null) {
                    this.motions.splice(aI, 1);
                    aI--;
                    continue;
                }
                var aH = aJ._$w0;
                if (aH == null) {
                    this.motions.splice(aI, 1);
                    aI--;
                    continue;
                }
                if (!aJ.isFinished()) {
                    return false;
                }
            }
            return true;
        }
    };
    V.prototype.stopAllMotions = function () {
        for (var aI = 0; aI < this.motions.length; aI++) {
            var aJ = this.motions[aI];
            if (aJ == null) {
                this.motions.splice(aI, 1);
                aI--;
                continue;
            }
            var aH = aJ._$w0;
            if (aH == null) {
                this.motions.splice(aI, 1);
                aI--;
                continue;
            }
            if (true) {
                this.motions.splice(aI, 1);
                aI--;
            }
        }
    };
    V.prototype._$Zr = function (aH) {
        this._$eb = aH;
    };
    V.prototype._$e = function () {
        console.log("-- _$R --\n");
        for (var aH = 0; aH < this.motions.length; aH++) {
            var aI = this.motions[aH];
            var aJ = aI._$w0;
            console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, aJ.toString());
        }
    };
    function M() {
        this._$w0 = null;
        this._$AT = true;
        this._$9L = false;
        this._$z2 = -1;
        this._$bs = -1;
        this._$Do = -1;
        this._$sr = null;
        this._$sr = M._$Gs++;
    }
    M._$Gs = 0;
    M.prototype.isFinished = function () {
        return this._$9L;
    };
    M.prototype._$qS = function (aJ) {
        var aI = P.getUserTimeMSec();
        var aH = aI + aJ;
        if (this._$Do < 0 || aH < this._$Do) {
            this._$Do = aH;
        }
    };
    M.prototype._$Bs = function () {
        return this._$sr;
    };
    function am() {
        this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    am.prototype.setContext = function (aI) {
        var aH = this.m;
        aI.transform(aH[0], aH[1], aH[3], aH[4], aH[6], aH[7]);
    };
    am.prototype.toString = function () {
        var aI = "LDTransform { ";
        for (var aH = 0; aH < 9; aH++) {
            aI += this.m[aH].toFixed(2) + " ,";
        }
        aI += " }";
        return aI;
    };
    am.prototype.identity = function () {
        var aH = this.m;
        aH[0] = aH[4] = aH[8] = 1;
        aH[1] = aH[2] = aH[3] = aH[5] = aH[6] = aH[7] = 0;
    };
    am.prototype._$PS = function (aI, aK, aJ) {
        if (aJ == null) {
            aJ = new Array(0, 0);
        }
        var aH = this.m;
        aJ[0] = aH[0] * aI + aH[3] * aK + aH[6];
        aJ[1] = aH[1] * aI + aH[4] * aK + aH[7];
        return aJ;
    };
    am.prototype._$P2 = function (aK) {
        if (!aK) {
            aK = new am();
        }
        var aI = this.m;
        var aT = aI[0];
        var aS = aI[1];
        var aR = aI[2];
        var aQ = aI[3];
        var aP = aI[4];
        var aO = aI[5];
        var aN = aI[6];
        var aM = aI[7];
        var aL = aI[8];
        var aJ = aT * aP * aL + aS * aO * aN + aR * aQ * aM - aT * aO * aM - aR * aP * aN - aS * aQ * aL;
        if (aJ == 0) {
            return null;
        } else {
            var aH = 1 / aJ;
            aK.m[0] = aH * (aP * aL - aM * aO);
            aK.m[1] = aH * (aM * aR - aS * aL);
            aK.m[2] = aH * (aS * aO - aP * aR);
            aK.m[3] = aH * (aN * aO - aQ * aL);
            aK.m[4] = aH * (aT * aL - aN * aR);
            aK.m[5] = aH * (aQ * aR - aT * aO);
            aK.m[6] = aH * (aQ * aM - aN * aP);
            aK.m[7] = aH * (aN * aS - aT * aM);
            aK.m[8] = aH * (aT * aP - aQ * aS);
            return aK;
        }
    };
    am.prototype.transform = function (aI, aK, aJ) {
        if (aJ == null) {
            aJ = new Array(0, 0);
        }
        var aH = this.m;
        aJ[0] = aH[0] * aI + aH[3] * aK + aH[6];
        aJ[1] = aH[1] * aI + aH[4] * aK + aH[7];
        return aJ;
    };
    am.prototype.translate = function (aI, aJ) {
        var aH = this.m;
        aH[6] = aH[0] * aI + aH[3] * aJ + aH[6];
        aH[7] = aH[1] * aI + aH[4] * aJ + aH[7];
        aH[8] = aH[2] * aI + aH[5] * aJ + aH[8];
    };
    am.prototype.scale = function (aJ, aI) {
        var aH = this.m;
        aH[0] *= aJ;
        aH[1] *= aJ;
        aH[2] *= aJ;
        aH[3] *= aI;
        aH[4] *= aI;
        aH[5] *= aI;
    };
    am.prototype.shear = function (aM, aL) {
        var aH = this.m;
        var aK = aH[0] + aH[3] * aL;
        var aJ = aH[1] + aH[4] * aL;
        var aI = aH[2] + aH[5] * aL;
        aH[3] = aH[0] * aM + aH[3];
        aH[4] = aH[1] * aM + aH[4];
        aH[5] = aH[2] * aM + aH[5];
        aH[0] = aK;
        aH[1] = aJ;
        aH[2] = aI;
    };
    am.prototype.rotate = function (aM) {
        var aH = this.m;
        var aN = Math.cos(aM);
        var aL = Math.sin(aM);
        var aK = aH[0] * aN + aH[3] * aL;
        var aJ = aH[1] * aN + aH[4] * aL;
        var aI = aH[2] * aN + aH[5] * aL;
        aH[3] = -aH[0] * aL + aH[3] * aN;
        aH[4] = -aH[1] * aL + aH[4] * aN;
        aH[5] = -aH[2] * aL + aH[5] * aN;
        aH[0] = aK;
        aH[1] = aJ;
        aH[2] = aI;
    };
    am.prototype.concatenate = function (aL) {
        var aO = this.m;
        var aM = aL.m;
        var aS = aO[0] * aM[0] + aO[3] * aM[1] + aO[6] * aM[2];
        var aR = aO[1] * aM[0] + aO[4] * aM[1] + aO[7] * aM[2];
        var aQ = aO[2] * aM[0] + aO[5] * aM[1] + aO[8] * aM[2];
        var aP = aO[0] * aM[3] + aO[3] * aM[4] + aO[6] * aM[5];
        var aN = aO[1] * aM[3] + aO[4] * aM[4] + aO[7] * aM[5];
        var aK = aO[2] * aM[3] + aO[5] * aM[4] + aO[8] * aM[5];
        var aJ = aO[0] * aM[6] + aO[3] * aM[7] + aO[6] * aM[8];
        var aI = aO[1] * aM[6] + aO[4] * aM[7] + aO[7] * aM[8];
        var aH = aO[2] * aM[6] + aO[5] * aM[7] + aO[8] * aM[8];
        m[0] = aS;
        m[1] = aR;
        m[2] = aQ;
        m[3] = aP;
        m[4] = aN;
        m[5] = aK;
        m[6] = aJ;
        m[7] = aI;
        m[8] = aH;
    };
    function n(aH) {
        if (j) {
            return;
        }
        ak.prototype.constructor.call(this, aH);
    }
    n.prototype = new ak();
    n._$eT = null;
    n._$tP = new Object();
    n._$2o = function () {
        if (n._$eT == null) {
            n._$eT = n.getID("DST_BASE");
        }
        return n._$eT;
    };
    n._$27 = function () {
        n._$tP.clear();
        n._$eT = null;
    };
    n.getID = function (aH) {
        var aI = n._$tP[aH];
        if (aI == null) {
            aI = new n(aH);
            n._$tP[aH] = aI;
        }
        return aI;
    };
    n.prototype._$3s = function () {
        return new n();
    };
    function C(aH) {
        if (j) {
            return;
        }
        ax.prototype.constructor.call(this);
        this.textures = new Array();
        this.transform = null;
        this.gl = null;
        this.glno = aH;
        this.firstDraw = true;
        this.anisotropyExt = null;
        this.maxAnisotropy = 0;
        this._$As = 32;
        this._$Gr = false;
        this._$NT = null;
        this._$vS = null;
        this._$no = null;
        this.vertShader = null;
        this.fragShader = null;
        this.vertShaderOff = null;
        this.fragShaderOff = null;
    }
    C.prototype = new ax();
    C._$9r = function (aH) {
        var aI = new Float32Array(aH);
        return aI;
    };
    C._$vb = function (aH) {
        var aI = new Int16Array(aH);
        return aI;
    };
    C._$cr = function (aI, aH) {
        if (aI == null || aI._$yL() < aH.length) {
            aI = C._$9r(aH.length * 2);
            aI.put(aH);
            aI._$oT(0);
        } else {
            aI.clear();
            aI.put(aH);
            aI._$oT(0);
        }
        return aI;
    };
    C._$mb = function (aI, aH) {
        if (aI == null || aI._$yL() < aH.length) {
            aI = C._$vb(aH.length * 2);
            aI.put(aH);
            aI._$oT(0);
        } else {
            aI.clear();
            aI.put(aH);
            aI._$oT(0);
        }
        return aI;
    };
    C._$Hs = function () {
        return this._$Gr;
    };
    C._$as = function (aH) {
        this._$Gr = aH;
    };
    C.prototype.getGL = function () {
        return this.gl;
    };
    C.prototype.setGL = function (aH) {
        this.gl = aH;
    };
    C.prototype.setTransform = function (aH) {
        this.transform = aH;
    };
    C.prototype._$ZT = function () {
        var aH = this.gl;
        if (this.firstDraw) {
            this.initShader();
            this.firstDraw = false;
            this.anisotropyExt = aH.getExtension("EXT_texture_filter_anisotropic") || aH.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || aH.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (this.anisotropyExt) {
                this.maxAnisotropy = aH.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            }
        }
        aH.disable(aH.SCISSOR_TEST);
        aH.disable(aH.STENCIL_TEST);
        aH.disable(aH.DEPTH_TEST);
        aH.frontFace(aH.CW);
        aH.enable(aH.BLEND);
        aH.colorMask(1, 1, 1, 1);
        aH.bindBuffer(aH.ARRAY_BUFFER, null);
        aH.bindBuffer(aH.ELEMENT_ARRAY_BUFFER, null);
    };
    C.prototype._$Uo = function (aS, aT, aL, aU, aV, aN, aM, aO) {
        if (aN < 0.01 && this.clipBufPre_clipContextMask == null) {
            return;
        }
        var aH = aN > 0.9 ? Q.EXPAND_W : 0;
        var a0 = this.gl;
        if (this.gl == null) {
            throw new Error("gl is null");
        }
        var a1 = false;
        var aQ = 1;
        var aP = 1;
        var a3 = 1;
        var aZ = 1;
        var aW = this._$C0 * aP * aN;
        var a2 = this._$tT * a3 * aN;
        var a5 = this._$WL * aZ * aN;
        var a7 = this._$lT * aN;
        if (this.clipBufPre_clipContextMask != null) {
            a0.frontFace(a0.CCW);
            a0.useProgram(this.shaderProgram);
            this._$vS = T(a0, this._$vS, aU);
            this._$no = L(a0, this._$no, aL);
            a0.enableVertexAttribArray(this.a_position_Loc);
            a0.vertexAttribPointer(this.a_position_Loc, 2, a0.FLOAT, false, 0, 0);
            this._$NT = T(a0, this._$NT, aV);
            a0.activeTexture(a0.TEXTURE1);
            a0.bindTexture(a0.TEXTURE_2D, this.textures[aS]);
            a0.uniform1i(this.s_texture0_Loc, 1);
            a0.enableVertexAttribArray(this.a_texCoord_Loc);
            a0.vertexAttribPointer(this.a_texCoord_Loc, 2, a0.FLOAT, false, 0, 0);
            a0.uniformMatrix4fv(this.u_matrix_Loc, false, this.getClipBufPre_clipContextMask().matrixForMask);
            var aY = this.getClipBufPre_clipContextMask().layoutChannelNo;
            var a4 = this.getChannelFlagAsColor(aY);
            a0.uniform4f(this.u_channelFlag, a4.r, a4.g, a4.b, a4.a);
            var aI = this.getClipBufPre_clipContextMask().layoutBounds;
            a0.uniform4f(this.u_baseColor_Loc, aI.x * 2 - 1, aI.y * 2 - 1, aI._$EL() * 2 - 1, aI._$5T() * 2 - 1);
            a0.uniform1i(this.u_maskFlag_Loc, true);
        } else {
            a1 = this.getClipBufPre_clipContextDraw() != null;
            if (a1) {
                a0.useProgram(this.shaderProgramOff);
                this._$vS = T(a0, this._$vS, aU);
                this._$no = L(a0, this._$no, aL);
                a0.enableVertexAttribArray(this.a_position_Loc_Off);
                a0.vertexAttribPointer(this.a_position_Loc_Off, 2, a0.FLOAT, false, 0, 0);
                this._$NT = T(a0, this._$NT, aV);
                a0.activeTexture(a0.TEXTURE1);
                a0.bindTexture(a0.TEXTURE_2D, this.textures[aS]);
                a0.uniform1i(this.s_texture0_Loc_Off, 1);
                a0.enableVertexAttribArray(this.a_texCoord_Loc_Off);
                a0.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, a0.FLOAT, false, 0, 0);
                a0.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, false, this.getClipBufPre_clipContextDraw().matrixForDraw);
                a0.uniformMatrix4fv(this.u_matrix_Loc_Off, false, this.matrix4x4);
                a0.activeTexture(a0.TEXTURE2);
                a0.bindTexture(a0.TEXTURE_2D, Q.fTexture[this.glno]);
                a0.uniform1i(this.s_texture1_Loc_Off, 2);
                var aY = this.getClipBufPre_clipContextDraw().layoutChannelNo;
                var a4 = this.getChannelFlagAsColor(aY);
                a0.uniform4f(this.u_channelFlag_Loc_Off, a4.r, a4.g, a4.b, a4.a);
                a0.uniform4f(this.u_baseColor_Loc_Off, aW, a2, a5, a7);
            } else {
                a0.useProgram(this.shaderProgram);
                this._$vS = T(a0, this._$vS, aU);
                this._$no = L(a0, this._$no, aL);
                a0.enableVertexAttribArray(this.a_position_Loc);
                a0.vertexAttribPointer(this.a_position_Loc, 2, a0.FLOAT, false, 0, 0);
                this._$NT = T(a0, this._$NT, aV);
                a0.activeTexture(a0.TEXTURE1);
                a0.bindTexture(a0.TEXTURE_2D, this.textures[aS]);
                a0.uniform1i(this.s_texture0_Loc, 1);
                a0.enableVertexAttribArray(this.a_texCoord_Loc);
                a0.vertexAttribPointer(this.a_texCoord_Loc, 2, a0.FLOAT, false, 0, 0);
                a0.uniformMatrix4fv(this.u_matrix_Loc, false, this.matrix4x4);
                a0.uniform4f(this.u_baseColor_Loc, aW, a2, a5, a7);
                a0.uniform1i(this.u_maskFlag_Loc, false);
            }
        }
        if (this.culling) {
            this.gl.enable(a0.CULL_FACE);
        } else {
            this.gl.disable(a0.CULL_FACE);
        }
        this.gl.enable(a0.BLEND);
        var a6;
        var aX;
        var aR;
        var aK;
        if (this.clipBufPre_clipContextMask != null) {
            a6 = a0.ONE;
            aX = a0.ONE_MINUS_SRC_ALPHA;
            aR = a0.ONE;
            aK = a0.ONE_MINUS_SRC_ALPHA;
        } else {
            switch (aM) {
                case b._$ms:
                    a6 = a0.ONE;
                    aX = a0.ONE_MINUS_SRC_ALPHA;
                    aR = a0.ONE;
                    aK = a0.ONE_MINUS_SRC_ALPHA;
                    break;
                case b._$ns:
                    a6 = a0.ONE;
                    aX = a0.ONE;
                    aR = a0.ZERO;
                    aK = a0.ONE;
                    break;
                case b._$_s:
                    a6 = a0.DST_COLOR;
                    aX = a0.ONE_MINUS_SRC_ALPHA;
                    aR = a0.ZERO;
                    aK = a0.ONE;
                    break;
            }
        }
        a0.blendEquationSeparate(a0.FUNC_ADD, a0.FUNC_ADD);
        a0.blendFuncSeparate(a6, aX, aR, aK);
        if (this.anisotropyExt) {
            a0.texParameteri(a0.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
        }
        var aJ = aL.length;
        a0.drawElements(a0.TRIANGLES, aJ, a0.UNSIGNED_SHORT, 0);
        a0.bindTexture(a0.TEXTURE_2D, null);
    };
    function T(aJ, aH, aI) {
        if (aH == null) {
            aH = aJ.createBuffer();
        }
        aJ.bindBuffer(aJ.ARRAY_BUFFER, aH);
        aJ.bufferData(aJ.ARRAY_BUFFER, aI, aJ.DYNAMIC_DRAW);
        return aH;
    }
    function L(aJ, aH, aI) {
        if (aH == null) {
            aH = aJ.createBuffer();
        }
        aJ.bindBuffer(aJ.ELEMENT_ARRAY_BUFFER, aH);
        aJ.bufferData(aJ.ELEMENT_ARRAY_BUFFER, aI, aJ.DYNAMIC_DRAW);
        return aH;
    }
    C.prototype._$Rs = function () {
        throw new Error("_$Rs");
    };
    C.prototype._$Ds = function (aH) {
        throw new Error("_$Ds");
    };
    C.prototype._$K2 = function () {
        for (var aH = 0; aH < this.textures.length; aH++) {
            var aI = this.textures[aH];
            if (aI != 0) {
                this.gl._$K2(1, this.textures, aH);
                this.textures[aH] = null;
            }
        }
    };
    C.prototype.setTexture = function (aH, aI) {
        this.textures[aH] = aI;
    };
    C.prototype.initShader = function () {
        var aH = this.gl;
        this.loadShaders2();
        this.a_position_Loc = aH.getAttribLocation(this.shaderProgram, "a_position");
        this.a_texCoord_Loc = aH.getAttribLocation(this.shaderProgram, "a_texCoord");
        this.u_matrix_Loc = aH.getUniformLocation(this.shaderProgram, "u_mvpMatrix");
        this.s_texture0_Loc = aH.getUniformLocation(this.shaderProgram, "s_texture0");
        this.u_channelFlag = aH.getUniformLocation(this.shaderProgram, "u_channelFlag");
        this.u_baseColor_Loc = aH.getUniformLocation(this.shaderProgram, "u_baseColor");
        this.u_maskFlag_Loc = aH.getUniformLocation(this.shaderProgram, "u_maskFlag");
        this.a_position_Loc_Off = aH.getAttribLocation(this.shaderProgramOff, "a_position");
        this.a_texCoord_Loc_Off = aH.getAttribLocation(this.shaderProgramOff, "a_texCoord");
        this.u_matrix_Loc_Off = aH.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix");
        this.u_clipMatrix_Loc_Off = aH.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix");
        this.s_texture0_Loc_Off = aH.getUniformLocation(this.shaderProgramOff, "s_texture0");
        this.s_texture1_Loc_Off = aH.getUniformLocation(this.shaderProgramOff, "s_texture1");
        this.u_channelFlag_Loc_Off = aH.getUniformLocation(this.shaderProgramOff, "u_channelFlag");
        this.u_baseColor_Loc_Off = aH.getUniformLocation(this.shaderProgramOff, "u_baseColor");
    };
    C.prototype.disposeShader = function () {
        var aH = this.gl;
        if (this.shaderProgram) {
            aH.deleteProgram(this.shaderProgram);
            this.shaderProgram = null;
        }
        if (this.shaderProgramOff) {
            aH.deleteProgram(this.shaderProgramOff);
            this.shaderProgramOff = null;
        }
    };
    C.prototype.compileShader = function (aJ, aN) {
        var aM = this.gl;
        var aH;
        var aL = aN;
        var aK = aM.createShader(aJ);
        if (aK == null) {
            q._$Ji("_$L0 to create shader");
            return null;
        }
        aM.shaderSource(aK, aL);
        aM.compileShader(aK);
        var aH = aM.getShaderParameter(aK, aM.COMPILE_STATUS);
        if (!aH) {
            var aI = aM.getShaderInfoLog(aK);
            q._$Ji("_$L0 to compile shader : " + aI);
            aM.deleteShader(aK);
            return null;
        }
        return aK;
    };
    C.prototype.loadShaders2 = function () {
        var aN = this.gl;
        this.shaderProgram = aN.createProgram();
        if (!this.shaderProgram) {
            return false;
        }
        this.shaderProgramOff = aN.createProgram();
        if (!this.shaderProgramOff) {
            return false;
        }
        var aK =
            "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}";
        var aM =
            "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}";
        var aL =
            "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}";
        var aJ =
            "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}";
        this.vertShader = this.compileShader(aN.VERTEX_SHADER, aK);
        if (!this.vertShader) {
            q._$Ji("Vertex shader compile _$li!");
            return false;
        }
        this.vertShaderOff = this.compileShader(aN.VERTEX_SHADER, aL);
        if (!this.vertShaderOff) {
            q._$Ji("OffVertex shader compile _$li!");
            return false;
        }
        this.fragShader = this.compileShader(aN.FRAGMENT_SHADER, aM);
        if (!this.fragShader) {
            q._$Ji("Fragment shader compile _$li!");
            return false;
        }
        this.fragShaderOff = this.compileShader(aN.FRAGMENT_SHADER, aJ);
        if (!this.fragShaderOff) {
            q._$Ji("OffFragment shader compile _$li!");
            return false;
        }
        aN.attachShader(this.shaderProgram, this.vertShader);
        aN.attachShader(this.shaderProgram, this.fragShader);
        aN.attachShader(this.shaderProgramOff, this.vertShaderOff);
        aN.attachShader(this.shaderProgramOff, this.fragShaderOff);
        aN.linkProgram(this.shaderProgram);
        aN.linkProgram(this.shaderProgramOff);
        var aH = aN.getProgramParameter(this.shaderProgram, aN.LINK_STATUS);
        if (!aH) {
            var aI = aN.getProgramInfoLog(this.shaderProgram);
            q._$Ji("_$L0 to link program: " + aI);
            if (this.vertShader) {
                aN.deleteShader(this.vertShader);
                this.vertShader = 0;
            }
            if (this.fragShader) {
                aN.deleteShader(this.fragShader);
                this.fragShader = 0;
            }
            if (this.shaderProgram) {
                aN.deleteProgram(this.shaderProgram);
                this.shaderProgram = 0;
            }
            if (this.vertShaderOff) {
                aN.deleteShader(this.vertShaderOff);
                this.vertShaderOff = 0;
            }
            if (this.fragShaderOff) {
                aN.deleteShader(this.fragShaderOff);
                this.fragShaderOff = 0;
            }
            if (this.shaderProgramOff) {
                aN.deleteProgram(this.shaderProgramOff);
                this.shaderProgramOff = 0;
            }
            return false;
        }
        return true;
    };
    C.prototype.createFramebuffer = function () {
        var aL = this.gl;
        var aK = Q.clippingMaskBufferSize;
        var aJ = aL.createFramebuffer();
        aL.bindFramebuffer(aL.FRAMEBUFFER, aJ);
        var aH = aL.createRenderbuffer();
        aL.bindRenderbuffer(aL.RENDERBUFFER, aH);
        aL.renderbufferStorage(aL.RENDERBUFFER, aL.RGBA4, aK, aK);
        aL.framebufferRenderbuffer(aL.FRAMEBUFFER, aL.COLOR_ATTACHMENT0, aL.RENDERBUFFER, aH);
        var aI = aL.createTexture();
        aL.bindTexture(aL.TEXTURE_2D, aI);
        aL.texImage2D(aL.TEXTURE_2D, 0, aL.RGBA, aK, aK, 0, aL.RGBA, aL.UNSIGNED_BYTE, null);
        aL.texParameteri(aL.TEXTURE_2D, aL.TEXTURE_MIN_FILTER, aL.LINEAR);
        aL.texParameteri(aL.TEXTURE_2D, aL.TEXTURE_MAG_FILTER, aL.LINEAR);
        aL.texParameteri(aL.TEXTURE_2D, aL.TEXTURE_WRAP_S, aL.CLAMP_TO_EDGE);
        aL.texParameteri(aL.TEXTURE_2D, aL.TEXTURE_WRAP_T, aL.CLAMP_TO_EDGE);
        aL.framebufferTexture2D(aL.FRAMEBUFFER, aL.COLOR_ATTACHMENT0, aL.TEXTURE_2D, aI, 0);
        aL.bindTexture(aL.TEXTURE_2D, null);
        aL.bindRenderbuffer(aL.RENDERBUFFER, null);
        aL.bindFramebuffer(aL.FRAMEBUFFER, null);
        Q.fTexture[this.glno] = aI;
        return { framebuffer: aJ, renderbuffer: aH, texture: Q.fTexture[this.glno] };
    };
    function K(aH) {
        if (j) {
            return;
        }
        this._$P = new Int8Array(8);
        this._$R0 = new DataView(this._$P.buffer);
        this._$3i = new Int8Array(1000);
        this._$hL = 0;
        this._$v0 = 0;
        this._$S2 = 0;
        this._$Ko = new Array();
        this._$T = aH;
        this._$F = 0;
    }
    K.prototype._$fP = function () {
        var aK = this._$ST();
        var aJ, aI, aH;
        if ((aK & 128) == 0) {
            return aK & 255;
        } else {
            if (((aJ = this._$ST()) & 128) == 0) {
                return ((aK & 127) << 7) | (aJ & 127);
            } else {
                if (((aI = this._$ST()) & 128) == 0) {
                    return ((aK & 127) << 14) | ((aJ & 127) << 7) | (aI & 255);
                } else {
                    if (((aH = this._$ST()) & 128) == 0) {
                        return ((aK & 127) << 21) | ((aJ & 127) << 14) | ((aI & 127) << 7) | (aH & 255);
                    } else {
                        throw new J("_$L _$0P  _");
                    }
                }
            }
        }
    };
    K.prototype.getFormatVersion = function () {
        return this._$S2;
    };
    K.prototype._$gr = function (aH) {
        this._$S2 = aH;
    };
    K.prototype._$3L = function () {
        return this._$fP();
    };
    K.prototype._$mP = function () {
        this._$zT();
        this._$F += 8;
        return this._$T.getFloat64(this._$F - 8);
    };
    K.prototype._$_T = function () {
        this._$zT();
        this._$F += 4;
        return this._$T.getFloat32(this._$F - 4);
    };
    K.prototype._$6L = function () {
        this._$zT();
        this._$F += 4;
        return this._$T.getInt32(this._$F - 4);
    };
    K.prototype._$ST = function () {
        this._$zT();
        return this._$T.getInt8(this._$F++);
    };
    K.prototype._$9T = function () {
        this._$zT();
        this._$F += 2;
        return this._$T.getInt16(this._$F - 2);
    };
    K.prototype._$2T = function () {
        this._$zT();
        this._$F += 8;
        throw new J("_$L _$q read long");
    };
    K.prototype._$po = function () {
        this._$zT();
        return this._$T.getInt8(this._$F++) != 0;
    };
    var O = true;
    K.prototype._$bT = function () {
        this._$zT();
        var aH = this._$3L();
        var aK = null;
        if (O) {
            try {
                var aM = new ArrayBuffer(aH * 2);
                aK = new Uint16Array(aM);
                for (var aJ = 0; aJ < aH; ++aJ) {
                    aK[aJ] = this._$T.getUint8(this._$F++);
                }
                return String.fromCharCode.apply(null, aK);
            } catch (aL) {
                O = false;
            }
        }
        try {
            var aI = new Array();
            if (aK == null) {
                for (var aJ = 0; aJ < aH; ++aJ) {
                    aI[aJ] = this._$T.getUint8(this._$F++);
                }
            } else {
                for (var aJ = 0; aJ < aH; ++aJ) {
                    aI[aJ] = aK[aJ];
                }
            }
            return String.fromCharCode.apply(null, aI);
        } catch (aL) {
            console.log("read utf8 / _$rT _$L0 !! : " + aL);
        }
    };
    K.prototype._$cS = function () {
        this._$zT();
        var aI = this._$3L();
        var aH = new Int32Array(aI);
        for (var aJ = 0; aJ < aI; aJ++) {
            aH[aJ] = this._$T.getInt32(this._$F);
            this._$F += 4;
        }
        return aH;
    };
    K.prototype._$Tb = function () {
        this._$zT();
        var aI = this._$3L();
        var aH = new Float32Array(aI);
        for (var aJ = 0; aJ < aI; aJ++) {
            aH[aJ] = this._$T.getFloat32(this._$F);
            this._$F += 4;
        }
        return aH;
    };
    K.prototype._$5b = function () {
        this._$zT();
        var aI = this._$3L();
        var aH = new Float64Array(aI);
        for (var aJ = 0; aJ < aI; aJ++) {
            aH[aJ] = this._$T.getFloat64(this._$F);
            this._$F += 8;
        }
        return aH;
    };
    K.prototype._$nP = function () {
        return this._$Jb(-1);
    };
    K.prototype._$Jb = function (aJ) {
        this._$zT();
        if (aJ < 0) {
            aJ = this._$3L();
        }
        if (aJ == ay._$7P) {
            var aH = this._$6L();
            if (0 <= aH && aH < this._$Ko.length) {
                return this._$Ko[aH];
            } else {
                throw new J("_$sL _$4i @_$m0");
            }
        } else {
            var aI = this._$4b(aJ);
            this._$Ko.push(aI);
            return aI;
        }
    };
    K.prototype._$4b = function (aN) {
        if (aN == 0) {
            return null;
        }
        if (aN == 50) {
            var aK = this._$bT();
            var aI = Z.getID(aK);
            return aI;
        } else {
            if (aN == 51) {
                var aK = this._$bT();
                var aI = n.getID(aK);
                return aI;
            } else {
                if (aN == 134) {
                    var aK = this._$bT();
                    var aI = i.getID(aK);
                    return aI;
                } else {
                    if (aN == 60) {
                        var aK = this._$bT();
                        var aI = z.getID(aK);
                        return aI;
                    }
                }
            }
        }
        if (aN >= 48) {
            var aL = ay._$9o(aN);
            if (aL != null) {
                aL._$F0(this);
                return aL;
            } else {
                return null;
            }
        }
        switch (aN) {
            case 1:
                return this._$bT();
            case 10:
                var aM = this._$6L();
                return new I(aM, true);
            case 11:
                return new av(this._$mP(), this._$mP(), this._$mP(), this._$mP());
            case 12:
                return new av(this._$_T(), this._$_T(), this._$_T(), this._$_T());
            case 13:
                return new e(this._$mP(), this._$mP());
            case 14:
                return new e(this._$_T(), this._$_T());
            case 15:
                var aH = this._$3L();
                var aI = new Array(aH);
                for (var aJ = 0; aJ < aH; aJ++) {
                    aI[aJ] = this._$nP();
                }
                return aI;
            case 17:
                var aI = new aD(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
                return aI;
            case 21:
                return new F(this._$6L(), this._$6L(), this._$6L(), this._$6L());
            case 22:
                return new k(this._$6L(), this._$6L());
            case 23:
                throw new Error("_$L _$ro ");
            case 16:
            case 25:
                return this._$cS();
            case 26:
                return this._$5b();
            case 27:
                return this._$Tb();
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 18:
            case 19:
            case 20:
            case 24:
            case 28:
                throw new J("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + aN);
            default:
                throw new J("_$6 _$q : _$nP() NO _$i : " + aN);
        }
    };
    K.prototype._$8L = function () {
        if (this._$hL == 0) {
            this._$v0 = this._$ST();
        } else {
            if (this._$hL == 8) {
                this._$v0 = this._$ST();
                this._$hL = 0;
            }
        }
        return ((this._$v0 >> (7 - this._$hL++)) & 1) == 1;
    };
    K.prototype._$zT = function () {
        if (this._$hL != 0) {
            this._$hL = 0;
        }
    };
    function ai() { }
    ai.prototype._$wP = function (aM, aI, aK) {
        for (var aL = 0; aL < aK; aL++) {
            for (var aH = 0; aH < aI; aH++) {
                var aJ = 2 * (aH + aL * aI);
                console.log("(% 7.3f , % 7.3f) , ", aM[aJ], aM[aJ + 1]);
            }
            console.log("\n");
        }
        console.log("\n");
    };
    function aC() { }
    aC._$2S = Math.PI / 180;
    aC._$bS = Math.PI / 180;
    aC._$wS = 180 / Math.PI;
    aC._$NS = 180 / Math.PI;
    aC.PI_F = Math.PI;
    aC._$kT = [
        0,
        0.012368,
        0.024734,
        0.037097,
        0.049454,
        0.061803,
        0.074143,
        0.086471,
        0.098786,
        0.111087,
        0.12337,
        0.135634,
        0.147877,
        0.160098,
        0.172295,
        0.184465,
        0.196606,
        0.208718,
        0.220798,
        0.232844,
        0.244854,
        0.256827,
        0.268761,
        0.280654,
        0.292503,
        0.304308,
        0.316066,
        0.327776,
        0.339436,
        0.351044,
        0.362598,
        0.374097,
        0.385538,
        0.396921,
        0.408243,
        0.419502,
        0.430697,
        0.441826,
        0.452888,
        0.463881,
        0.474802,
        0.485651,
        0.496425,
        0.507124,
        0.517745,
        0.528287,
        0.538748,
        0.549126,
        0.559421,
        0.56963,
        0.579752,
        0.589785,
        0.599728,
        0.609579,
        0.619337,
        0.629,
        0.638567,
        0.648036,
        0.657406,
        0.666676,
        0.675843,
        0.684908,
        0.693867,
        0.70272,
        0.711466,
        0.720103,
        0.72863,
        0.737045,
        0.745348,
        0.753536,
        0.76161,
        0.769566,
        0.777405,
        0.785125,
        0.792725,
        0.800204,
        0.807561,
        0.814793,
        0.821901,
        0.828884,
        0.835739,
        0.842467,
        0.849066,
        0.855535,
        0.861873,
        0.868079,
        0.874153,
        0.880093,
        0.885898,
        0.891567,
        0.897101,
        0.902497,
        0.907754,
        0.912873,
        0.917853,
        0.922692,
        0.92739,
        0.931946,
        0.936359,
        0.940629,
        0.944755,
        0.948737,
        0.952574,
        0.956265,
        0.959809,
        0.963207,
        0.966457,
        0.96956,
        0.972514,
        0.97532,
        0.977976,
        0.980482,
        0.982839,
        0.985045,
        0.987101,
        0.989006,
        0.990759,
        0.992361,
        0.993811,
        0.995109,
        0.996254,
        0.997248,
        0.998088,
        0.998776,
        0.999312,
        0.999694,
        0.999924,
        1,
    ];
    aC._$92 = function (aK, aI) {
        var aH = Math.atan2(aK[1], aK[0]);
        var aJ = Math.atan2(aI[1], aI[0]);
        return aC._$tS(aH, aJ);
    };
    aC._$tS = function (aI, aH) {
        var aJ = aI - aH;
        while (aJ < -Math.PI) {
            aJ += 2 * Math.PI;
        }
        while (aJ > Math.PI) {
            aJ -= 2 * Math.PI;
        }
        return aJ;
    };
    aC._$9 = function (aH) {
        return Math.sin(aH);
    };
    aC.fcos = function (aH) {
        return Math.cos(aH);
    };
    function aB(aH) {
        if (j) {
            return;
        }
        this._$e0 = null;
        this._$IP = null;
        this._$Us = null;
        this._$7s = null;
        this._$IS = [false];
        this._$VS = null;
        this._$AT = true;
        this.baseOpacity = 1;
        this.clipBufPre_clipContext = null;
        this._$e0 = aH;
    }
    aB.prototype._$u2 = function () {
        return this._$IS[0];
    };
    aB.prototype._$yo = function () {
        return this._$AT && !this._$IS[0];
    };
    aB.prototype._$GT = function () {
        return this._$e0;
    };
    function r() { }
    r._$W2 = 0;
    r.SYSTEM_INFO = null;
    r.USER_AGENT = navigator.userAgent;
    r.isIPhone = function () {
        if (!r.SYSTEM_INFO) {
            r.setup();
        }
        return r.SYSTEM_INFO._isIPhone;
    };
    r.isIOS = function () {
        if (!r.SYSTEM_INFO) {
            r.setup();
        }
        return r.SYSTEM_INFO._isIPhone || r.SYSTEM_INFO._isIPad;
    };
    r.isAndroid = function () {
        if (!r.SYSTEM_INFO) {
            r.setup();
        }
        return r.SYSTEM_INFO._isAndroid;
    };
    r.getOSVersion = function () {
        if (!r.SYSTEM_INFO) {
            r.setup();
        }
        return r.SYSTEM_INFO.version;
    };
    r.getOS = function () {
        if (!r.SYSTEM_INFO) {
            r.setup();
        }
        if (r.SYSTEM_INFO._isIPhone || r.SYSTEM_INFO._isIPad) {
            return "iOS";
        }
        if (r.SYSTEM_INFO._isAndroid) {
            return "Android";
        } else {
            return "_$Q0 OS";
        }
    };
    r.setup = function () {
        var aK = r.USER_AGENT;
        function aI(aO, aR) {
            var aN = aO.substring(aR).split(/[ _,;\.]/);
            var aQ = 0;
            for (var aM = 0; aM <= 2; aM++) {
                if (isNaN(aN[aM])) {
                    break;
                }
                var aP = parseInt(aN[aM]);
                if (aP < 0 || aP > 999) {
                    q._$li("err : " + aP + " @UtHtml5.setup()");
                    aQ = 0;
                    break;
                }
                aQ += aP * Math.pow(1000, 2 - aM);
            }
            return aQ;
        }
        var aL;
        var aH;
        var aJ = (r.SYSTEM_INFO = { userAgent: aK });
        if ((aL = aK.indexOf("iPhone OS ")) >= 0) {
            aJ.os = "iPhone";
            aJ._isIPhone = true;
            aJ.version = aI(aK, aL + "iPhone OS ".length);
        } else {
            if ((aL = aK.indexOf("iPad")) >= 0) {
                aL = aK.indexOf("CPU OS");
                if (aL < 0) {
                    q._$li(" err : " + aK + " @UtHtml5.setup()");
                    return;
                }
                aJ.os = "iPad";
                aJ._isIPad = true;
                aJ.version = aI(aK, aL + "CPU OS ".length);
            } else {
                if ((aL = aK.indexOf("Android")) >= 0) {
                    aJ.os = "Android";
                    aJ._isAndroid = true;
                    aJ.version = aI(aK, aL + "Android ".length);
                } else {
                    aJ.os = "-";
                    aJ.version = -1;
                }
            }
        }
    };
    window.UtSystem = P;
    window.UtDebug = q;
    window.LDTransform = am;
    window.LDGL = au;
    window.Live2D = Q;
    window.Live2DModelWebGL = l;
    window.Live2DModelJS = v;
    window.Live2DMotion = ao;
    window.MotionQueueManager = V;
    window.PhysicsHair = u;
    window.AMotion = ah;
    window.PartsDataID = i;
    window.DrawDataID = Z;
    window.BaseDataID = n;
    window.ParamID = z;
    Q.init();
    var j = false;
})();