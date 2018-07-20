<template>
	<layout full-screen with-title main-title="EasyUI 数据表">
		<table id="tt" class="easyui-treegrid" style="width:600px;height:400px"
		data-options="url:'get_data.php',idField:'id',treeField:'name'">
			<thead>
				<tr>
					<th data-options="field:'name',width:180">Task Name</th>
					<th data-options="field:'persons',width:60,align:'right'">Persons</th>
					<th data-options="field:'begin',width:80">Begin Date</th>
					<th data-options="field:'end',width:80">End Date</th>
				</tr>
			</thead>
		</table>
	</layout>
</template>

<script>
export default {
	
}
</script>
