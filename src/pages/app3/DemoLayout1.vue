<template>
	<sc-layout full-screen bgcolor="#fff" :west="west">
		<div slot="west">west</div>

		<div class="padding">
			hello world!
		</div>
	</sc-layout>
</template>

<script>
	export default {
		data () {
			return {
				west: {
					width: 350,
					padding: true,
					collapsible: true
				}
			}
		}
	}
</script>
