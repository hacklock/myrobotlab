angular.module('mrlapp.service')
        .directive('serviceDirective', ['$document', function ($document) {
                return {
                    scope: {
                        //"=" -> binding to items in parent-scope specified by attribute
                        //"@" -> using passed attribute
                        spawndata: '=service'
                    },
                    templateUrl: 'service/service.html',
                    controller: 'ServiceCtrl',
                    link: function (scope, element, attr) {
                        
//                        scope.$watch(function () {
//                            return scope.spawndata.panelsize.aktsize;
//                        }, function () {
//                            var aktsize = scope.spawndata.panelsize.aktsize;
//                            angular.forEach(scope.spawndata.panelsize.sizes, function (value, key) {
//                                if (value.name == aktsize) {
//                                    element.css({
//                                        width: value.width + 'px'
//                                    });
//                                }
//                            });
//                        });
                        scope.notifySizeChanged = function() {
                            element.css({
                                width: scope.spawndata.panelsize.sizes[scope.spawndata.panelsize.aktsize].width + 'px'
                            });
                        };

//                        //TODO - later ...
//                        var startX = 0, startY = 0, x = 0, y = 0;
//                        var offsetY = 200;
//                        var headerY = 50;
//                        var footerY = 50;
////
////                        var outgenerallist = false;
////                        var ingenerallist = false;
////
//                        //maybe change to absolute & layout the panels manually
//                        //-> no panel glitch away (when you move another panel)
//                        element.css({
//                            position: 'relative'
//                        });
////
//                        element.on('mousedown', function (event) {
////                            outgenerallist = event.pageY < 250;
//                            startX = event.pageX - x;
//                            startY = event.pageY - y;
//                            var height = element.height();
//                            if (startY < offsetY + headerY ||
//                                    startY > offsetY + height - footerY) {
//                                // Prevent default dragging of selected content
//                                event.preventDefault();
////
////                                //put panel in foreground
////                                //TODO: worky, but sometimes buggy
////                                var zindex = scope.list[scope.index].zindex;
////                                console.log('zindex', zindex);
//////                                var str1 = '';
//////                                angular.forEach(scope.list, function (value, key) {
//////                                    str1 = str1 + value.zindex + ", ";
//////                                });
//////                                console.log('zindex3', str1);
////                                angular.forEach(scope.list, function (value, key) {
////                                    //console.log("zindex2", key, value.zindex);
////                                    if (value.zindex > zindex) {
////                                        value.zindex--;
////                                    }
////                                });
////                                scope.list[scope.index].zindex = scope.list.length;
//////                                var str2 = '';
//////                                angular.forEach(scope.list, function (value, key) {
//////                                    str2 = str2 + value.zindex + ", ";
//////                                });
//////                                console.log('zindex3', str2);
////
//                                element.css({
//                                    cursor: 'move',
////                                    'z-index': zindex
//                                });
//                                $document.on('mousemove', mousemove);
//                                $document.on('mouseup', mouseup);
//                            }
//                        });
////
//                        function mousemove(event) {
//////                            console.log('mousemove', event.pageX, event.pageY);
////                            ingenerallist = event.pageY < 250;
//                            y = event.pageY - startY;
//                            x = event.pageX - startX;
//                            element.css({
//                                top: y + 'px',
//                                left: x + 'px'
//                            });
//                        }
////
//                        function mouseup() {
//                            $document.off('mousemove', mousemove);
//                            $document.off('mouseup', mouseup);
//                            element.css({
//                                cursor: 'auto'
//                            });
////                            //move panel to different list (if it was moved there)
////                            //TODO: worky, but sometimes buggy
////                            if (ingenerallist && !outgenerallist) {
////                                scope.reftomain.dragInGenerallist(scope.index, scope.list);
////                            } else if (!ingenerallist && outgenerallist) {
////                                scope.reftomain.dragOutGenerallist(scope.index);
////                            }
//                        }
                    }
                };
            }]);