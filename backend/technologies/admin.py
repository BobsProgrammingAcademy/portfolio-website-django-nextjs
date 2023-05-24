from django.contrib import admin
from .models import Technology


class TechnologyAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'icon')
  list_display_links = ('id', 'name')
  search_fields = ('name', 'icon')
  list_per_page = 20


admin.site.register(Technology, TechnologyAdmin)
