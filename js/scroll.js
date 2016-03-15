/**
 * ------------------------------------------------------------------
 * ��ֱ�������
 * ʵ��ѭ���������������ӳٺ���ͣ�Ĺ���
 * 
 * @version  1.0
 * @date     2016-02-02
 * @author   lishuangzhuang<hzlishuangzhuang@corp.netease.com>
 * ------------------------------------------------------------------
 */
var scroll = (function(){
	/**
	 * ���������ʼ��
	 *
	 * ���Ȼ���delay���ӳ٣�֮��ʼ��speed�������ٶ����Ϲ���lh��px
	 *
	 * @param    {string}  selector    ��Ҫ������Ŀ��Ԫ�ؽڵ�
	 * @param    {number}    lh        ÿ�ι����ĸ߶ȣ���λ��px��
	 * @param    {number}   speed      �ٶȣ�ԽСԽ��
	 * @param    {number}   delay      ��������ӳ٣���λ��ms��
	 * @returns   void
	 *
	 */
	var scrollInit = function(selector,lh,speed,delay){ 
		var t = null; 
		var o = document.querySelector(selector);
		var h = false;
		o.onmouseover = function() {
			h = true;
		};
		o.onmouseout = function() {
			h = false;
		};
		function start(){ 
			t = setInterval(scrolling,speed); 
			if (!h ) {
				o.scrollTop += 1;	
			} 
		} 
		function scrolling(){ 
			if(o.scrollTop%lh !== 0){
				o.scrollTop += 1; 
				if(o.scrollTop >= 384){
					o.scrollTop = 0;
				} 
			} else {
				clearInterval(t); 
				setTimeout(start,delay); 
			} 
		} 
		setTimeout(start,delay); 
	};
	return {
		scrollInit: scrollInit
	};
})();
